package de.btu.swt.backend.git;

import com.fasterxml.jackson.annotation.JsonIgnore;
import de.btu.swt.backend.version.Version;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import javax.persistence.ManyToOne;
import java.nio.file.Path;
import java.util.Objects;

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class GitConfiguration {

    @ManyToOne
    @NonNull
    private GitAccount gitAccount;
    @NonNull
    private String subUrl;
    @NonNull
    private String branch;
    @NonNull
    private String dir;
    /**
     * null means no common gitSettings => user specifics settings are used
     */
    @Embedded
    private GitUserSettings commonGitSettings;

    @JsonIgnore
    public Path getPath(Version version) {
        String remoteSubDir = dir;
        remoteSubDir = remoteSubDir.replaceAll("\\/", java.io.File.separator);
        remoteSubDir = remoteSubDir.replaceAll("\\\\", java.io.File.separator);
        if (remoteSubDir.indexOf(java.io.File.separator) == 0) {
            remoteSubDir = remoteSubDir.substring(java.io.File.separator.length());
        }
        Path path = version.getRemoteDirectory().resolve(remoteSubDir);
        java.io.File file = path.toFile();
        if (!file.exists())
            file.mkdirs();
        return path;
    }

    @JsonIgnore
    public boolean isValid() {
        String[] branches = gitAccount.getBranches(subUrl);
        if (branches.length == 0)
            return false;
        return true;
    }

}
