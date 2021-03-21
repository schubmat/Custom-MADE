package de.btu.swt.backend.git;

import com.fasterxml.jackson.annotation.JsonIgnore;
import de.btu.swt.backend.storage.Storage;
import de.btu.swt.backend.user.User;
import de.btu.swt.backend.util.ScriptRunner;
import lombok.*;

import javax.persistence.*;
import java.nio.file.Path;
import java.util.Objects;

@Table(
    name = "git_accounts",
    uniqueConstraints = {@UniqueConstraint(columnNames = {"plattformUrl", "name"})})
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class GitAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    private String plattformUrl;

    @NonNull
    /** name of corresponding git-lab user */
    private String name;

    private boolean isPublic;

    @ManyToOne
    @JsonIgnore
    private User creator;


    @JsonIgnore
    public Path getDir() {
        Path path = Storage.ROOT.resolve("ssh" + java.io.File.separator + plattformUrl + java.io.File.separator + id + "_" + name + "_rsa");
        return path;
    }

    @JsonIgnore
    private String getRawBranchesOutput(String subUrl) {
        String cloneUrl = getPlattformUrl() + subUrl;
        String command = "git ls-remote --heads --refs \""+cloneUrl+"\"";
        return useCommandWithSshKey(command);
    }

    @JsonIgnore
    public boolean hasProjectAccess(String subUrl) {
        String scriptOutput = getRawBranchesOutput(subUrl);
        return !scriptOutput.isEmpty();
    }

    @JsonIgnore
    public String[] getBranches(String subUrl) {
        String scriptOutput = getRawBranchesOutput(subUrl);
        String[] rawBranches = scriptOutput.split("\\s");
        String[] branchNames = new String[rawBranches.length/2];
        for (int i = 0; i < branchNames.length; ++i) {
            String[] path = rawBranches[i*2+1].split("\\/");
            branchNames[i] = path[path.length-1];
        }
        return branchNames;
    }

    @JsonIgnore
    public String[] getDirs(String subUrl, String branch) {
        final ClassLoader classLoader = getClass().getClassLoader();
        final java.io.File script = new java.io.File(Objects.requireNonNull(classLoader.getResource("git_connect/getRemoteDirs.sh")).getFile());
        String remoteUrl = getPlattformUrl() + subUrl;
        String command = "bash";
        command += " \""+script.getAbsolutePath()+ "\"";
        command += " \"" + remoteUrl + "\"";
        command += " \"" + branch + "\"";
        String out = useCommandWithSshKey(command);
        return out.split("\\s");
    }

    @JsonIgnore
    public boolean isValid() {
        String scriptOutput = useCommandWithSshKey("ssh -T \""+getPlattformUrl()+"\"");
        return !scriptOutput.isEmpty();
    }

    @JsonIgnore
    public String getGitLabName() {
        String scriptOutput = useCommandWithSshKey("ssh -T \""+getPlattformUrl()+"\"");
        if (scriptOutput.isEmpty())
            return "";
        int indexOfAt = scriptOutput.lastIndexOf('@');
        if (indexOfAt < 0)
            return "";
        String name = scriptOutput.substring(indexOfAt+1);
        if (name.charAt(name.length()-1) == '!')
            name = name.substring(0, name.length()-1);
        return name;
    }

    @JsonIgnore
    public String useCommandWithSshKey(String command) {
        String keyPath = getDir().toFile().getAbsolutePath();
        final ClassLoader classLoader = getClass().getClassLoader();
        final java.io.File script = new java.io.File(Objects.requireNonNull(classLoader.getResource("git_connect/useWithSshKey.sh")).getFile());
        String[] scriptParams = {
                keyPath,
                command
        };
        return ScriptRunner.run(script,scriptParams);
    }

}
