package de.btu.swt.backend.file;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import de.btu.swt.backend.lsp.LanguageServer;
import de.btu.swt.backend.storage.FileRepresentation;
import de.btu.swt.backend.user.User;
import de.btu.swt.backend.version.Version;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.nio.file.Path;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


@ToString(exclude = {"editors", "version"})
@Getter
@Setter
@EqualsAndHashCode(exclude = {"editors", "version"})
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "file")
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class File implements FileRepresentation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    private String name;

    @CreationTimestamp
    private LocalDate createdAt;

    @UpdateTimestamp
    private LocalDate lastEdited;

    FileStatus status = FileStatus.UNCHECKED;

    private String content;

    @JsonIgnore
    @ManyToOne
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Version version;

    @JsonIgnore
    @ManyToMany
    private final Set<User> editors = new HashSet<>();

    @JsonIgnore
    @Override
    public Path getDir() {
        return version.getSrcFilesDirectory();
    }

    @JsonIgnore
    @Override
    public String getFileName() {
        return name + "." + version.getGrammar().getDslExtension();
    }

    @JsonIgnore
    public Path getPath() {
        return getDir().resolve(getFileName());
    }

    @JsonIgnore
    public LanguageServer getDefiningLsp() {
        Version grammar = version.getGrammar();
        if (grammar == null)
            return null;
        return grammar.getLanguageServer();
    }

    @JsonProperty("content")
    public String getContent() {
        return getFileContent();
    }

    @JsonIgnore
    public String getRequestContent() {
        return content;
    }

    public Set<User> getEditorsAsUsers() {
        return editors;
    }

    @JsonIgnore
    public List<java.io.File> getExports() {
        return Arrays.stream(version.getExportFilesDirectory().toFile().listFiles())
                .filter(export -> export.getName().indexOf(name+".") == 0)
                .collect(Collectors.toList());
    }

    @JsonIgnore
    public void addEditor(User user) {
        if (!editors.contains(user))
            editors.add(user);
    }

    @JsonIgnore
    public static File create(String name, Version version, User user) {
        File entity = File.builder()
                .name(name)
                .version(version)
                .build();
        entity.addEditor(user);
        return entity;
    }


}
