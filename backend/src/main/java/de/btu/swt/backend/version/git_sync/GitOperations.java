package de.btu.swt.backend.version.git_sync;

import de.btu.swt.backend.file.File;
import de.btu.swt.backend.git.GitAccount;
import de.btu.swt.backend.git.GitConfiguration;
import de.btu.swt.backend.git.GitUserSettings;
import de.btu.swt.backend.util.ScriptRunner;

import java.io.IOException;
import java.nio.file.Path;
import java.util.List;
import java.util.Objects;

public class GitOperations {

    private final GitConfiguration config;

    GitOperations(GitConfiguration config) {
        this.config = config;
    }

    void clone(java.io.File localRoot, GitUserSettings userSettings) {
        GitAccount gitAccount = config.getGitAccount();
        String subUrl = config.getSubUrl();
        String branch = config.getBranch();
        String dir = config.getDir();
        final ClassLoader classLoader = getClass().getClassLoader();
        final java.io.File script = new java.io.File(Objects.requireNonNull(classLoader.getResource("git_connect/partialClone.sh")).getFile());
        String command = "bash";
        command += " \"" + script.getAbsolutePath()+ "\"";
        command += " \"" + localRoot.getAbsolutePath() + "\"";
        command += " \"" + gitAccount.getPlattformUrl() + subUrl + "\"";
        command += " \"" + branch + "\"";
        command += " \"" + dir + "\"";
        command += " \"" + userSettings.getName() + "\"";
        command += " \"" + userSettings.getEmail() + "\"";
        gitAccount.useCommandWithSshKey(command);
    }

    void commitChanges(List<java.io.File> files, String commitMessage, java.io.File localRoot, GitUserSettings userSettings) throws IOException {
        GitAccount gitAccount = config.getGitAccount();
        final ClassLoader classLoader = getClass().getClassLoader();
        final java.io.File script = new java.io.File(Objects.requireNonNull(classLoader.getResource("git_connect/commitChanges.sh")).getFile());
        String command = "bash";
        command += " \"" + script.getAbsolutePath()+ "\"";
        command += " \"" + localRoot.getAbsolutePath() + "\"";
        command += " \"" + commitMessage + "\"";
        command += " \"" + userSettings.getName() + "\"";
        command += " \"" + userSettings.getEmail() + "\"";
        Path localRootPath = localRoot.toPath();
        for (java.io.File file : files) {
            command += " \"" + localRootPath.relativize(file.getCanonicalFile().toPath()) + "\"";
        }
        gitAccount.useCommandWithSshKey(command);
    }

    boolean push(java.io.File localRoot, GitUserSettings userSettings) {
        GitAccount gitAccount = config.getGitAccount();
        final ClassLoader classLoader = getClass().getClassLoader();
        final java.io.File script = new java.io.File(Objects.requireNonNull(classLoader.getResource("git_connect/push.sh")).getFile());
        String command = "bash";
        command += " \"" + script.getAbsolutePath()+ "\"";
        command += " \"" + localRoot.getAbsolutePath() + "\"";
        command += " \"" + userSettings.getName() + "\"";
        command += " \"" + userSettings.getEmail() + "\"";
        String result = gitAccount.useCommandWithSshKey(command);
        return result.isEmpty();
    }

    /**
     *
     * @param localRoot
     * @return List of altered, created and deleted files.
     */
    String[] pull(java.io.File localRoot) {
        GitAccount gitAccount = config.getGitAccount();
        final ClassLoader classLoader = getClass().getClassLoader();
        final java.io.File script = new java.io.File(Objects.requireNonNull(classLoader.getResource("git_connect/pull.sh")).getFile());
        String command = "bash";
        command += " \"" + script.getAbsolutePath()+ "\"";
        command += " \"" + localRoot.getAbsolutePath() + "\"";
        String result = gitAccount.useCommandWithSshKey(command);
        if (result.length() == 0)
            return new String[0];
        return result.split("\\s");
    }

    /**
     *
     * @param localRoot
     * @return List of file that are currently in a merge conflict
     */
    String[] getFilesInMergeConflict(java.io.File localRoot) {
        final ClassLoader classLoader = getClass().getClassLoader();
        final java.io.File script = new java.io.File(Objects.requireNonNull(classLoader.getResource("git_connect/getFilesInMergeConflict.sh")).getFile());
        String[] scriptParams = {localRoot.getAbsolutePath()};
        String result = ScriptRunner.run(script,scriptParams);

        if (result.length() == 0)
            return new String[0];
        return result.split("\\s");
    }

    String[] getDeletedByThemFiles(java.io.File localRoot) {
        final ClassLoader classLoader = getClass().getClassLoader();
        final java.io.File script = new java.io.File(Objects.requireNonNull(classLoader.getResource("git_connect/getStatus.sh")).getFile());
        String[] scriptParams = {localRoot.getAbsolutePath(), "UD"};
        String result = ScriptRunner.run(script,scriptParams);

        if (result.length() == 0)
            return new String[0];
        return result.split("\\s");
    }
}
