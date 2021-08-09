package de.btu.swt.backend.version;

import de.btu.swt.backend.file.*;
import de.btu.swt.backend.project.Project;
import de.btu.swt.backend.project.ProjectLevel;
import de.btu.swt.backend.project.ProjectRepository;
import de.btu.swt.backend.project.VersionMemberships;
import de.btu.swt.backend.git.GitConfiguration;
import de.btu.swt.backend.git.GitUserSettings;
import de.btu.swt.backend.storage.FileSystemStorageService;
import de.btu.swt.backend.storage.StorageService;
import de.btu.swt.backend.user.User;
import de.btu.swt.backend.user.UserRepository;
import de.btu.swt.backend.util.ErroneousFile;
import de.btu.swt.backend.util.FileExport;
import de.btu.swt.backend.version.git_sync.FileSystemOperations;
import de.btu.swt.backend.version.git_sync.GitException;
import de.btu.swt.backend.version.git_sync.RemoteSynchronizer;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/versions")
public class VersionController {
    private final VersionRepository versionRepository;
    private final ProjectRepository projectRepository;
    private final FileRepository fileRepository;
    private final UserRepository userRepository;
    private final RemoteSynchronizer gitService;

    public VersionController(VersionRepository versionRepository, ProjectRepository projectRepository,
            FileRepository fileRepository, UserRepository userRepository, RemoteSynchronizer worker) {
        this.versionRepository = versionRepository;
        this.projectRepository = projectRepository;
        this.fileRepository = fileRepository;
        this.userRepository = userRepository;
        this.gitService = worker;
    }

    @GetMapping("")
    public ResponseEntity<List<Version>> all(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(versionRepository.findAll().stream()
                .filter(version -> version.getMemberships().stream()
                        .anyMatch(projectMembership -> projectMembership.getPermissions().contains(Permissions.USE)
                                && projectMembership.getUser().getId().equals(user.getId())))
                .collect(Collectors.toList()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@AuthenticationPrincipal UserDetails userDetails, @PathVariable long id) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElse(new User());
        if (!validate(user, id, Permissions.BROWSE_FILES)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Version does not exist or user does not have permission to browse version");
        }
        Optional<Version> oVersion = versionRepository.findById(id);
        if (oVersion.isPresent()) {
            Version version = oVersion.get();
            gitService.pullSynchronize(user, version);
            Optional<Version> oSynchronized = versionRepository.findById(id);
            if (oSynchronized.isPresent()) {
                return ResponseEntity.ok(new VersionDTOBuilder(version).build());
            } else {
                return ResponseEntity.status(HttpStatus.FORBIDDEN)
                        .body("No Version with id=" + id + " found after git synchronization");
            }
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("No Version with id=" + id + " found");
        }
    }

    @PostMapping()
    public ResponseEntity<?> create(@AuthenticationPrincipal UserDetails userDetails,
            @Valid @RequestBody Version newVersion) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElse(new User());
        Project newProject = newVersion.getProject();
        if (newProject == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No new project specified.");
        }
        if (!projectRepository.findByName(newProject.getName()).isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Name has already been taken.");
        }
        newProject.setOwner(user);
        projectRepository.save(newProject);
        Optional<Version> optionalGrammar = versionRepository.findById(newVersion.getGrammar().getId());
        if (!optionalGrammar.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The selected grammar does not exist");
        }
        Version grammar = optionalGrammar.get();
        if (!grammar.isValid()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The selected grammar contains errors");
        }
        newVersion.addUser(user, Permissions.OWNER);
        newVersion.setOwner(user);
        newVersion = versionRepository.save(newVersion);
        return ResponseEntity.ok(new VersionDTOBuilder(newVersion).build());
    }

    @PostMapping("/{versionId}/members")
    public ResponseEntity<?> addMember(@AuthenticationPrincipal UserDetails userDetails, @PathVariable long versionId,
            @Valid @RequestBody final VersionMemberships ship) {
        if (ship.getUser() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No user specified");
        }
        long memberId = ship.getUser().getId();
        ResponseEntity<?> error = getPermissionsEditingError(userDetails, versionId, memberId, ship.getPermissions());
        if (error != null) {
            return error;
        }
        if (!Permissions.isKnown(ship.getPermissions())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Specified permissions do not exist");
        }
        User addedMember = userRepository.getOne(memberId);
        Version version = versionRepository.getOne(versionId);
        if (version.getMembership(addedMember.getUsername()) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User is already a member");
        }
        version.addUser(addedMember, ship.getPermissions());
        version = versionRepository.save(version);
        VersionMemberships newShip = version.getMembership(addedMember.getUsername());
        if (newShip == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unable to add user to version");
        }
        return ResponseEntity.ok(newShip);
    }

    @PutMapping("/{versionId}/members/{memberId}")
    public ResponseEntity<?> putMembersSettings(@AuthenticationPrincipal UserDetails userDetails,
            @PathVariable long versionId, @PathVariable long memberId,
            @Valid @RequestBody final VersionMemberships ship) {

        User addedMember;
        try {
            addedMember = userRepository.getOne(memberId);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User does not exist: " + e);
        }
        Version version = versionRepository.getOne(versionId);
        VersionMemberships oldShip = version.getMembership(addedMember.getUsername());
        if (oldShip == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User is not a member");
        }
        Permissions oldPermissions = oldShip.getPermissions();
        Permissions newPermissions = ship.getPermissions();
        if (!newPermissions.equals(oldPermissions)) {
            ResponseEntity<?> error = getPermissionsEditingError(userDetails, versionId, memberId, newPermissions);
            if (error != null) {
                return error;
            }
            if (!Permissions.isKnown(newPermissions)) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Specified permissions do not exist");
            }
        }
        GitUserSettings newGitSettings = ship.getGitSettings();
        GitUserSettings oldGitSettings = oldShip.getGitSettings();
        if (!newGitSettings.equals(oldGitSettings) && !addedMember.getUsername().equals(userDetails.getUsername())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You cannot edit another members git settings");
        }
        version.editMember(addedMember, ship);
        version = versionRepository.save(version);
        VersionMemberships newShip = version.getMembership(addedMember.getUsername());
        if (newShip == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unable to edit settings");
        }
        return ResponseEntity.ok(newShip);
    }

    private ResponseEntity<?> getPermissionsEditingError(UserDetails userDetails, long versionId, long memberId,
            Permissions permissions) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElse(new User());
        if (!validate(user, versionId, Permissions.ADD_USERS)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Version does not exists or user has no permission to add/remover members to this project");
        }
        User addedUser;
        try {
            addedUser = userRepository.getOne(memberId);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Specified user does not exist");
        }
        if (addedUser.getId().equals(user.getId()) && permissions != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User cannot edit his/her own permissions");
        }
        Version version = versionRepository.getOne(versionId);
        Permissions currentPermissions = version.getPermissions(addedUser);
        Permissions userPermissions = version.getPermissions(user);
        if (!userPermissions.isGreaterThan(currentPermissions)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("User is not allowed to change these permissions");
        }
        if (permissions != null && !userPermissions.isGreaterThan(permissions)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User is not allowed to give these permissions");
        }
        return null;
    }

    @DeleteMapping("/{versionId}/members/{memberId}")
    public ResponseEntity<?> removeMember(@AuthenticationPrincipal User user, @PathVariable long versionId,
            @PathVariable long memberId) {
        if (user.getId() == memberId) {
            return removeUser(user, versionId);
        }
        ResponseEntity<?> error = getPermissionsEditingError(user, versionId, memberId, null);
        if (error != null) {
            return error;
        }
        User removedMember = userRepository.getOne(memberId);
        Version version = versionRepository.getOne(versionId);
        VersionMemberships membership = version.removeUser(removedMember);
        if (membership == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User is not member of the version");
        }
        versionRepository.save(version);
        return ResponseEntity.ok().body(membership);
    }

    @DeleteMapping("/{versionId}/members/user")
    public ResponseEntity<?> removeUser(@AuthenticationPrincipal User user, @PathVariable long versionId) {
        Version version = versionRepository.getOne(versionId);
        if (version.getOwner().getId().longValue() == user.getId().longValue()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("An owner cannot leave his/her project");
        }
        VersionMemberships membership = version.removeUser(user);
        if (membership == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User is not member of the version");
        }
        versionRepository.save(version);
        return ResponseEntity.ok().body(membership);
    }

    @PostMapping("/{id}/export")
    public ResponseEntity<?> export(@AuthenticationPrincipal UserDetails userDetails, @PathVariable long id,
            @Valid @RequestBody File[] requestedFiles) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElse(new User());
        if (!validate(user, id, Permissions.EXPORT_FILES)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Version does not exists or user does not have permission to export files");
        }
        Optional<Version> oVersion = versionRepository.findById(id);
        if (oVersion.isPresent()) {
            Version version = oVersion.get();
            if (!version.getGrammar().isHasGenerator()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("The grammar does not support any generation");
            }
            List<File> files = Arrays.stream(requestedFiles).map(file -> fileRepository.findById(file.getId()).get())
                    .filter(Objects::nonNull).collect(Collectors.toList());
            return FileExport.fetchExports(files, version, user);
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("No Version with id=" + id + " found.");
        }
    }

    @GetMapping("/{id}/export")
    public ResponseEntity<?> export(@AuthenticationPrincipal UserDetails userDetails, @PathVariable long id) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElse(new User());
        if (!validate(user, id, Permissions.EXPORT_FILES)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Version does not exists or user does not have permission to export files");
        }
        Optional<Version> oVersion = versionRepository.findById(id);
        if (oVersion.isPresent()) {
            Version version = oVersion.get();
            if (!version.getGrammar().isHasGenerator()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("The grammar does not support any generation");
            }
            return FileExport.fetchExports(new LinkedList<>(version.getFiles()), version, user);
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("No Version with id=" + id + " found.");
        }
    }

    @PostMapping("/export")
    public ResponseEntity<?> exportVersions(@AuthenticationPrincipal User user,
            @Valid @RequestBody Version[] requestVersions) {
        List<Version> versions = Arrays.stream(requestVersions)
                .map(version -> versionRepository.findById(version.getId()).get()).filter(Objects::nonNull)
                .filter(version -> version.getPermissions(user).contains(Permissions.EXPORT_FILES))
                .collect(Collectors.toList());
        return FileExport.export(versions, user);
    }

    @PostMapping("/{id}/files")
    public ResponseEntity<?> add(@AuthenticationPrincipal UserDetails userDetails, @PathVariable long id,
            @Valid @RequestBody final File request) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElse(new User());
        if (!validate(user, id, Permissions.CHANGE_FILES)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Version does not exists or user does not have permission to add files");
        }
        Version version = versionRepository.getOne(id);
        if (version.getProject().getLevel() == ProjectLevel.M1) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You cannot add further files to a M1-project");
        }

        if (version.getFiles().stream().noneMatch(m0File -> m0File.getName().equals(request.getName()))) {
            request.setVersion(version);
            request.setStatus(FileStatus.UNCHECKED);
            request.addEditor(user);
            try {
                request.getPath().toFile().createNewFile();
            } catch (IOException e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unable to access file system");
            }
            return ResponseEntity.ok(fileRepository.save(request));
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("File with this name already exists in project");
        }
    }

    @GetMapping("/{id}/files")
    public ResponseEntity<?> download(@AuthenticationPrincipal UserDetails userDetails, @PathVariable long id) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElse(new User());
        if (!validate(user, id, Permissions.BROWSE_FILES)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Version does not exists or user does not have permission to browse files");
        }
        Version version = versionRepository.getOne(id);
        return FileExport.getRawFiles(version, userDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@AuthenticationPrincipal User user, @PathVariable long id) {
        if (!validate(user, id, Permissions.DELETE_VERSION)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Version does not exist or user does not have permission to delete it");
        }
        Version version = versionRepository.getOne(id);
        if (!version.getUsedLanguages().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("There are still projects implementing this grammar");
        }
        Project project = version.getProject();
        version.delete();
        version = versionRepository.save(version);
        versionRepository.delete(version);
        if (project != null && project.getLevel() == ProjectLevel.M0) {
            projectRepository.delete(project);
        }
        return ResponseEntity.ok(version);
    }

    @PostMapping("/{id}/files/upload")
    public ResponseEntity<?> uploadFiles(@AuthenticationPrincipal UserDetails userDetails, @PathVariable long id,
            @RequestParam("files[]") MultipartFile[] files) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElse(new User());
        if (!validate(user, id, Permissions.CHANGE_FILES)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Version does not exists or user does not have permission to add files");
        }
        Version version = versionRepository.getOne(id);
        if (version.getProject().getLevel() == ProjectLevel.M1) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You cannot add further files to a M1-project");
        }

        StorageService storage = new FileSystemStorageService();
        List<File> modifiedFiles = new LinkedList<>();
        for (MultipartFile file : files) {
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            if (!version.matchesFileExtension(fileName)) {
                continue;
            }
            int dotIndex = fileName.lastIndexOf('.');
            fileName = fileName.substring(0, dotIndex);
            File newFile = fileRepository.findByName(fileName);
            if (newFile == null) {
                newFile = File.create(fileName, version, user);
                newFile = fileRepository.save(newFile);
            } else {
                newFile.setStatus(FileStatus.UNCHECKED);
            }
            storage.store(file, newFile.getDir(), newFile.getFileName());
            modifiedFiles.add(newFile);
        }

        if (modifiedFiles.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Request did not contain any appropriated file: file extension has to match \""
                            + version.getGrammar().getDslExtension() + "\".");
        }
        String[] fileNames = modifiedFiles.stream().map(File::getName).toArray(String[]::new);
        fileRepository.saveAll(modifiedFiles);
        version = versionRepository.getOne(version.getId());
        try {
            gitService.commitPullAndPushChanges(modifiedFiles.toArray(new File[modifiedFiles.size()]),
                    "added/edited " + String.join(", ", fileNames), user, version);
        } catch (GitException | IOException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Unable to commit, pull and push changes on git: " + e);
        }
        return ResponseEntity.ok(new VersionDTOBuilder(version).build());
    }

    @PatchMapping("/{versionId}/files")
    public ResponseEntity<?> setFiles(@AuthenticationPrincipal UserDetails userDetails, @PathVariable long versionId,
            @RequestBody File[] files) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElse(new User());
        if (!validate(user, versionId, Permissions.CHANGE_FILES)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Version does not exist or user does not have permission to edit files");
        }
        Version version = versionRepository.getOne(versionId);
        FileSystemOperations fileSystem = new FileSystemOperations(version);
        try {
            fileSystem.createBackup();
        } catch (IOException e) {
            try {
                fileSystem.removeBackup();
            } catch (IOException e1) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("Unable to remove backup from FileSystem: " + e1);
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unable to edit file system");
        }

        List<File> modifiedFiles = new LinkedList<>();
        try {
            for (File file : files) {
                File modified = putFileContent(user, file.getId(), file.getRequestContent(), versionId);
                if (modified != null) {
                    modifiedFiles.add(modified);
                }
            }
        } catch (IOException e) {
            try {
                fileSystem.restoreBackup();
            } catch (IOException e2) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                        "Unable to restore file backup. The project is probably broken now, please contact the allmighty admin!");
            }
        } finally {
            try {
                fileSystem.removeBackup();
            } catch (IOException e) {
                ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("Unable to remove backup from FileSystem: " + e);
            }
        }

        fileRepository.saveAll(modifiedFiles);
        String[] fileNames = modifiedFiles.stream().map(file -> file.getName()).toArray(String[]::new);
        try {
            gitService.commitPullAndPushChanges(modifiedFiles.toArray(new File[modifiedFiles.size()]),
                    "edited " + String.join(", ", fileNames), user, version);
            List<File> deletedByThem = gitService.getDeletedByThemFiles(version, user);
            oneSidedDeleteConflict(deletedByThem, true);
        } catch (GitException | IOException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Unable to commit, pull and push changes on git: " + e);
        }
        return ResponseEntity.ok(new VersionDTOBuilder(version).build());
    }

    private static final String REMOTE_DELETE = "// This file has been deleted on the associated remote repository.";
    private static final String LOCAL_DELETE = "// This file has been deleted on the local repository.";
    private static final String TIP = "// If you want to re-add it respectively submit your changes to the old copy, please press save. Additionally, consider removing this comment.";

    private void oneSidedDeleteConflict(List<File> files, boolean deletedOnRemote) throws IOException {
        for (File file : files) {
            String content = file.getContent();
            content = (deletedOnRemote ? REMOTE_DELETE : LOCAL_DELETE) + "\n" + TIP + "\n" + content;
            file.setFileContent(content);
        }
    }

    private File putFileContent(User user, long id, String newContent, long versionId) throws IOException {
        File file = fileRepository.getOne(id);
        if (file.getVersion().getId() != versionId) {
            return null;
        }
        file.setFileContent(newContent);
        file.setStatus(FileStatus.UNCHECKED);
        file.addEditor(user);
        return file;
    }

    @DeleteMapping("/{versionId}/files")
    public ResponseEntity<?> deleteFiles(@AuthenticationPrincipal User user, @PathVariable long versionId,
            @RequestBody File[] requestedFiles) {
        if (!validate(user, versionId, Permissions.CHANGE_FILES)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Version does not exist or user does not have permission to delete files");
        }
        Version version = versionRepository.getOne(versionId);
        List<File> files = Arrays.stream(requestedFiles).map(file -> fileRepository.findById(file.getId()).get())
                .filter(Objects::nonNull).filter(file -> file.getVersion().getId() == versionId)
                .collect(Collectors.toList());
        for (File file : files) {
            file.setStatus(FileStatus.UNCHECKED);
            file.getPath().toFile().delete();
            file.getExports().forEach(export -> export.delete());
        }
        String[] fileNames = files.stream().map(file -> file.getName()).toArray(String[]::new);
        try {
            if (version.getGitConfiguration() == null) {
                fileRepository.deleteAll(files);
                version.getFiles().removeAll(files);
            }
            gitService.commitPullAndPushChanges(files.toArray(new File[files.size()]),
                    "deleted " + String.join(", ", fileNames), user, version);
        } catch (GitException | IOException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Unable to commit, pull and push changes on git: " + e);
        }

        List<File> conflictFiles = files.stream().filter(file -> file.getStatus() == FileStatus.IN_CONFLICT)
                .collect(Collectors.toList());
        try {
            oneSidedDeleteConflict(conflictFiles, false);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Unable to delete conflict files: " + e);
        }
        return ResponseEntity.ok(new VersionDTOBuilder(version).build());
    }

    @PatchMapping("{id}/validate")
    public ResponseEntity<?> validate(@AuthenticationPrincipal UserDetails userDetails, @PathVariable long id) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElse(new User());
        if (!validate(user, id, Permissions.BROWSE_FILES)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Version does not exists or user does not have permission to browse files");
        }
        Version version = versionRepository.getOne(id);
        return validate(userDetails, id, version.getFiles().toArray(new File[version.getFiles().size()]));
    }

    @PostMapping("/{id}/validate")
    public ResponseEntity<?> validate(@AuthenticationPrincipal UserDetails userDetails, @PathVariable long id,
            @Valid @RequestBody File[] requestedFiles) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElse(new User());
        if (!validate(user, id, Permissions.BROWSE_FILES)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Version does not exists or user does not have permission to browse files");
        }
        Version version = versionRepository.getOne(id);
        List<File> files = Arrays.stream(requestedFiles).map(file -> fileRepository.findById(file.getId()).get())
                .filter(Objects::nonNull).filter(file -> file.getStatus() != FileStatus.IN_CONFLICT)
                .collect(Collectors.toList());
        Deque<ErroneousFile> erroneousFiles = FileExport.validateAndCreatePermanentExportNew(files, version, user);
        fileRepository.saveAll(files);
        version = versionRepository.save(version);
        try {
            gitService.commitPullAndPushChanges(files.toArray(new File[files.size()]), "added exports", user, version);
        } catch (GitException | IOException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Unable to commit, pull and push changes on git: " + e);
        }
        return ResponseEntity.ok(new VersionValidationDTO(version, erroneousFiles));
    }

    @PatchMapping("{id}/git")
    public ResponseEntity<?> setGitConfig(@AuthenticationPrincipal User user, @PathVariable long id,
            @Valid @RequestBody GitConfiguration gitConfig) {
        if (!validate(user, id, Permissions.CONFIG_GIT)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Version does not exist or user does not have permission to change the git config");
        }
        if (!gitConfig.isValid()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Unvalid configuration (check key, url and branch)");
        }
        Version version = versionRepository.getOne(id);

        try {
            gitService.cloneSynchronize(user, gitConfig, version);
            Set<File> files = version.getFiles();
            try {
                gitService.commitPullAndPushChanges(files.toArray(new File[files.size()]),
                        "initialized with Custom-MADE", user, version);
            } catch (IOException e1) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("Unable to commit, pull and push changes on git: " + e1);
            }
            return ResponseEntity.ok(new VersionDTOBuilder(version).build());
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unable to access file system");
        } catch (GitException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    private boolean validate(User user, long id, Permissions actions) {
        try {
            Version version = versionRepository.getOne(id);
            return version.getPermissions(user).contains(actions);
        } catch (Exception e) {
            // TODO: rethrow error to catch missing version
            return false;
        }
    }

}
