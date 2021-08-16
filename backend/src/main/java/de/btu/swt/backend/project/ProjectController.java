package de.btu.swt.backend.project;

import com.sun.mail.iap.Response;
import de.btu.swt.backend.file.File;
import de.btu.swt.backend.file.FileRepository;
import de.btu.swt.backend.user.User;
import de.btu.swt.backend.user.UserRepository;
import de.btu.swt.backend.version.Permissions;
import de.btu.swt.backend.version.Version;
import de.btu.swt.backend.version.VersionDTOBuilder;
import de.btu.swt.backend.version.VersionRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import javax.validation.Valid;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@RestController
@RequestMapping("/projects")
public class ProjectController {
    private final ProjectRepository projectRepository;
    private final VersionRepository versionRepository;
    private final FileRepository fileRepository;
    private final UserRepository userRepository;


    public ProjectController(ProjectRepository projectRepository,
                             VersionRepository versionRepository,
                             FileRepository fileRepository,
                             UserRepository userRepository) {
        this.projectRepository = projectRepository;
        this.versionRepository = versionRepository;
        this.fileRepository = fileRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/{level}")
    public ResponseEntity all(@AuthenticationPrincipal UserDetails userDetails, @PathVariable int level) {
        Optional<User> opt = userRepository.findByUsername(userDetails.getUsername());
        if (!opt.isPresent())
            return null;
        User user = opt.get();

        ProjectLevel projectLevel = ProjectLevel.values()[level];
        return ResponseEntity.ok(projectRepository.findByLevel(projectLevel).stream()
                .map(project -> new ProjectDTOBuilder(project, user).build())
                .collect(Collectors.toSet()));
    }

    @PostMapping
    public ResponseEntity create(@AuthenticationPrincipal UserDetails userDetails,
                               @Valid @RequestBody Project newProject) {
        Optional<User> opt = userRepository.findByUsername(userDetails.getUsername());
        if (!opt.isPresent())
            return null;
        User user = opt.get();

        if (projectRepository.findByName(newProject.getName()).size() >= 1) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Name has already been taken.");
        }
        newProject.setOwner(user);
        newProject = projectRepository.save(newProject);
        return ResponseEntity.ok(newProject);
    }

    @PostMapping("/{projectId}/versions")
    public ResponseEntity create(
            @AuthenticationPrincipal UserDetails userDetails,
            @PathVariable long projectId,
            @Valid @RequestBody final Version request) {
        Optional<User> opt = userRepository.findByUsername(userDetails.getUsername());
        if (!opt.isPresent())
            return null;

        User user = opt.get();
        Optional<Project> projectOptional = projectRepository.findById(projectId);
        if (!projectOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Project with given request id doesn't exist");
        }
        Project project = projectOptional.get();
        if (!project.getVersions().stream()
                .noneMatch(version -> version.getVersion().equals(request.getVersion()))) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Version name has already been taken.");
        }
        request.setProject(project);
        if (request.getGrammar() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("No grammar referenced.");
        }
        Optional<Version> optionalGrammar = versionRepository.findById(request.getGrammar().getId());
        if (!optionalGrammar.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("The referenced grammar does not exist.");
        }
        Version grammar = optionalGrammar.get();
        if (!grammar.isValid()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("The selected grammar contains errors");
        }
        request.setGrammar(grammar);
        request.addUser(user, Permissions.OWNER);
        request.setOwner(user);
        Version newVersion = versionRepository.save(request);
        if (project.getLevel() == ProjectLevel.M1) {
            setupM1Version(request, user);
        }
        // TODO: create LSP if it is a m1 project
        return ResponseEntity.ok(new VersionDTOBuilder(newVersion).build());
    }

    private void setupM1Version(Version version, User creator) {
        File newFile = File.builder()
                .name(version.getProject().getName())
                .version(version)
                .build();
        newFile.addEditor(creator);
        fileRepository.save(newFile);
        version.getFiles().add(newFile);
    }
}
