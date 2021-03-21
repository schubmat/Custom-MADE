package de.btu.swt.backend.project;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import de.btu.swt.backend.git.GitUserSettings;
import de.btu.swt.backend.user.User;
import de.btu.swt.backend.version.Permissions;
import de.btu.swt.backend.version.Version;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"user", "version"})
@Entity
public class VersionMemberships implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JsonIgnore
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Version version;

    @ManyToOne
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private User user;

    @NonNull
    @Embedded
    private Permissions permissions;

    /**
     * only used, if common settings are null
     */
    @Embedded
    private GitUserSettings gitSettings;

    public GitUserSettings getGitSettings() {
        if (gitSettings == null)
            return GitUserSettings.getDefaultSettings(user);
        return gitSettings;
    }
}
