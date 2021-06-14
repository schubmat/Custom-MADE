package de.btu.swt.backend.version;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import de.btu.swt.backend.file.File;
import de.btu.swt.backend.file.FileStatus;
import de.btu.swt.backend.lsp.LanguageServer;
import de.btu.swt.backend.project.Project;
import de.btu.swt.backend.project.VersionMemberships;
import de.btu.swt.backend.project.VisibilityLevel;
import de.btu.swt.backend.git.GitConfiguration;
import de.btu.swt.backend.storage.Storage;
import de.btu.swt.backend.user.User;
import de.btu.swt.backend.util.ScriptRunner;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(exclude = {"project", "usedLanguages", "files", "languageServer"})
@ToString(exclude = {"project", "usedLanguages", "files", "languageServer"})
@Table(name = "version")
@Entity
public class Version {

    public class ModelValidationException extends Exception {
        protected ModelValidationException(String message) {
            super(message);
        }
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NonNull
    @ManyToOne
    @JsonIgnore
    private User owner;
    private String description;
    @NonNull
    private String version;
    @NonNull
    private VisibilityLevel visibility = VisibilityLevel.PUBLIC;
    @CreationTimestamp
    private LocalDate createdAt;
    @UpdateTimestamp
    private LocalDate lastEdited;
    private String dslExtension;
    //TODO: generators, validators, language-files

    private boolean hasGenerator = false;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne
    private Project project;

    @OneToMany(mappedBy = "version", cascade = CascadeType.ALL)
    private final Set<VersionMemberships> memberships = new HashSet<>();

    @JsonIgnore
    @OneToMany (mappedBy = "grammar")
    private final Set<Version> usedLanguages = new HashSet<>();

    public Long getGrammarId() {
        if (grammar == null)
            return null;
        return grammar.getId();
    }

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    private Version grammar;

    @JsonIgnore
    @OneToMany (mappedBy = "version", cascade = CascadeType.ALL)
    private final Set<File> files = new HashSet<>();

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "version_id")
    private LanguageServer languageServer;

    @Embedded
    private GitConfiguration gitConfiguration;

    @JsonIgnore
    public VersionMemberships addUser(User user, Permissions permissions) {
        VersionMemberships membership = VersionMemberships.builder()
                .user(user)
                .permissions(permissions)
                .version(this)
                .build();
        removeUser(user);
        memberships.add(membership);
        return membership;
    }

    @JsonIgnore
    public VersionMemberships removeUser(User user) {
        VersionMemberships ship = getMembership(user.getUsername());
        if (ship != null) {
            deleteMembership(ship);
            memberships.remove(ship);
            return VersionMemberships.builder()
                    .user(user)
                    .permissions(ship.getPermissions())
                    .version(this)
                    .build();
        }
        return null;
    }

    private void deleteMembership(VersionMemberships ship) {
        ship.setUser(null);
        ship.setVersion(null);
    }

    @JsonIgnore
    public void delete() {
        for (VersionMemberships ship : memberships) {
            deleteMembership(ship);
        }
        memberships.clear();
    }

    @JsonIgnore
    VersionMemberships editMember(User user, VersionMemberships newData) {
        VersionMemberships ship = getMembership(user.getUsername());
        if (ship == null)
            return null;
        ship.setPermissions(newData.getPermissions());
        ship.setGitSettings(newData.getGitSettings());
        return ship;
    }

    @JsonIgnore
    private Path createSub(String folderName) {
        Path result = getRoot().resolve(folderName);
        java.io.File file = result.toFile();
        if (!file.exists())
            file.mkdir();
        return result;
    }

    @JsonIgnore
    public Path getGeneralFilesDirectory() {
        return createSub("files");
    }

    @JsonIgnore
    public Path getSrcFilesDirectory() {
        Path result = getGeneralFilesDirectory().resolve("src");
        java.io.File asFile = result.toFile();
        if (!asFile.exists())
            asFile.mkdir();
        return result;
    }

    @JsonIgnore
    public Path getExportFilesDirectory() {
        Path result = getGeneralFilesDirectory().resolve("gen");
        java.io.File asFile = result.toFile();
        if (!asFile.exists())
            asFile.mkdir();
        return result;
    }

    @JsonIgnore
    public Path getRemoteDirectory() {
        return createSub("remote");
    }

    @JsonIgnore
    public Path getRoot() {
        Path path = Storage.ROOT.resolve(project.getLevel().name() + "_projects" + java.io.File.separator + id + "_" + project.getName() + java.io.File.separator + version);
        java.io.File file = path.toFile();
        if (!file.exists())
            file.mkdirs();
        return file.getAbsoluteFile().toPath();
    }

    @JsonIgnore
    public java.io.File export(List<File> files, java.io.File uniqueDir) throws ModelValidationException, IOException {
        if (files.isEmpty())
            return null;

        String subDir = project.getName() + java.io.File.separator + version;
        String srcDir = uniqueDir.getAbsolutePath() + java.io.File.separator + "src" + java.io.File.separator + subDir;
        String targetDir = uniqueDir.getAbsolutePath() + java.io.File.separator + "target" + java.io.File.separator + subDir;
        java.io.File sources = new java.io.File(srcDir);
        java.io.File target = new java.io.File(targetDir);
        if (!sources.exists()) {
            sources.mkdirs();
            sources.mkdir();
        }

        for (File file : files) {
            if (file.getVersion().getId() != this.id)
                continue;
            java.io.File m0File = new java.io.File(file.getDir().toFile(), file.getFileName()).getAbsoluteFile();
            if (!m0File.exists())
                continue;
            Path linkPath = sources.toPath().resolve(file.getName()+"."+grammar.getDslExtension());
            Files.createSymbolicLink(linkPath, m0File.toPath());
        }
        callExportScript(srcDir, targetDir);
        if (!target.exists() || target.listFiles().length == 0) {
            if (target.exists())
                target.delete();
            return null;
        }
        return target;
    }

    @JsonIgnore
    public java.io.File exportAll(java.io.File uniqueDir) throws ModelValidationException, IOException {
        return export(files.stream().collect(Collectors.toList()), uniqueDir);
    }

    @JsonIgnore
    private void callExportScript(String sourceDir, String targetDir) throws ModelValidationException {
        final ClassLoader classLoader = getClass().getClassLoader();
        final java.io.File script = new java.io.File(Objects.requireNonNull(classLoader.getResource("project/export.sh")).getFile());
        final java.io.File pomDir = new java.io.File(Objects.requireNonNull(classLoader.getResource("project")).getFile());

        String[] scriptParams = {
                String.valueOf(id),
                pomDir.getAbsolutePath(),
                grammar.getLanguageServer().getLanguageName(),
                grammar.getVersion(),
                sourceDir,
                targetDir
        };

        String scriptOutput = ScriptRunner.run(script,scriptParams);
        if (!scriptOutput.isEmpty())
            throw new ModelValidationException(scriptOutput);
    }

    public boolean isValid() {
        for (File file : files) {
            if (file.getStatus() != FileStatus.VALID)
                return false;
        }
        return true;
    }

    @JsonIgnore
    public Permissions getPermissions(UserDetails userDetails) {
        String username = userDetails.getUsername();
        return getPermissions(username);
    }

    @JsonIgnore
    public VersionMemberships getMembership(String username) {
        Optional<VersionMemberships> membership = memberships.stream().filter(member -> member.getUser().getUsername().equals(username)).findAny();
        if (membership.isPresent())
            return membership.get();
        return null;
    }

    @JsonIgnore
    public Permissions getPermissions(String username) {
        VersionMemberships membership = getMembership(username);
        if (membership == null) {
            if (visibility == VisibilityLevel.PRIVATE)
                return Permissions.STRANGER_ON_PRIVATE;
            return Permissions.STRANGER_ON_PUBLIC;
        }
        return membership.getPermissions();
    }

    @JsonProperty("usersPermissions")
    public Permissions getUsersPermissions() {
        if (!SecurityContextHolder.getContext().getAuthentication().isAuthenticated())
            return Permissions.STRANGER_ON_PRIVATE;
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return getPermissions(user.getUsername());
    }

    @JsonIgnore
    public boolean matchesFileExtension(String fileName) {
        if (grammar == null)
            return false;
        int dotIndex = fileName.lastIndexOf('.');
        return dotIndex >= 0 &&
                fileName.substring(dotIndex + 1).equals(grammar.getDslExtension());
    }

    public String getFileExtension() {
        if (grammar == null)
            return null;
        return grammar.dslExtension;
    }

}
