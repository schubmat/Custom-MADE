package de.btu.swt.backend.version.git_sync;

import de.btu.swt.backend.file.File;
import de.btu.swt.backend.file.FileRepository;
import de.btu.swt.backend.file.FileStatus;
import de.btu.swt.backend.git.GitConfiguration;
import de.btu.swt.backend.git.GitUserSettings;
import de.btu.swt.backend.project.VersionMemberships;
import de.btu.swt.backend.user.User;
import de.btu.swt.backend.version.Version;
import de.btu.swt.backend.version.VersionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

@Service
public class RemoteSynchronizer {

    @Autowired
    private VersionRepository versionRepository;
    @Autowired
    private FileRepository fileRepository;

    private GitUserSettings getGitUserSettings(User user, GitConfiguration newConfig, Version version) {
        GitUserSettings commonSettings = newConfig.getCommonGitSettings();
        if (commonSettings != null)
            return commonSettings;
        VersionMemberships membership = version.getMembership(user.getUsername());
        if (membership == null) {
            return GitUserSettings.getDefaultSettings(user);
        }
        return membership.getGitSettings();
    }

    /**
     *
     * @param user
     * @param newConfig
     * @param version
     * @return added and edited files
     * @throws IOException
     * @throws GitException
     */
    public List<File> cloneSynchronize(User user, GitConfiguration newConfig, Version version)
            throws IOException, GitException {
        GitOperations git = new GitOperations(newConfig);
        FileSystemOperations fileSystem = new FileSystemOperations(version);
        EntityOperations entities = new EntityOperations(version, user);
        try {
            fileSystem.createBackup();
        } catch (IOException e) {
            fileSystem.removeBackup();
            throw e;
        }
        try {
            fileSystem.deleteRemoteFiles();
            git.clone(version.getRemoteDirectory().toFile().getAbsoluteFile(),
                    getGitUserSettings(user, newConfig, version));
            fileSystem.createNewFilesLink(newConfig);
            List<File> modifiedFiles = entities
                    .createOrUpdateFileEntities(Arrays.asList(version.getSrcFilesDirectory().toFile().listFiles()));
            fileSystem.mergeExistingFiles(modifiedFiles);
            fileSystem.removeBackup();
            version.setGitConfiguration(newConfig);
            fileRepository.saveAll(modifiedFiles);
            version = versionRepository.save(version);
            return modifiedFiles;
        } catch (IOException e) {
            fileSystem.restoreBackup();
            version.setGitConfiguration(null);
            version = versionRepository.save(version);
            fileSystem.deleteRemoteFiles();
            throw e;
        } finally {
            fileSystem.removeBackup();
        }
    }

    /**
     *
     * @param user
     * @param version
     * @return List of modified and not deleted files
     * @throws GitException
     */
    public List<File> pullSynchronize(User user, Version version) {
        GitConfiguration newConfig = version.getGitConfiguration();
        if (newConfig == null)
            return new LinkedList<>();
        GitOperations git = new GitOperations(newConfig);
        EntityOperations entities = new EntityOperations(version, user);
        // contains changed, created and deleted files
        String[] changedFiles = git.pull(version.getRemoteDirectory().toFile().getAbsoluteFile());

        List<java.io.File> notDeleted = getStorageFiles(changedFiles, version);
        List<File> modifiedFiles = entities.createOrUpdateFileEntities(notDeleted);
        List<File> deletedFiles = entities.deleteRemovedFileEntities();

        version.getFiles().removeAll(deletedFiles);
        versionRepository.save(version);
        fileRepository.saveAll(modifiedFiles);
        fileRepository.deleteAll(deletedFiles);

        return modifiedFiles;
    }

    public void commitPullAndPushChanges(File[] files, String commitMessage, User user, Version version)
            throws GitException, IOException {
        // if (version.getFiles().stream().filter(file -> file.getStatus() ==
        // FileStatus.IN_CONFLICT).count() > 0)
        // throw new GitException("Before you can commit your changes, you have to
        // resolve the merge conflict");
        GitConfiguration newConfig = version.getGitConfiguration();
        EntityOperations entities = new EntityOperations(version, user);
        if (newConfig == null)
            return;
        GitOperations git = new GitOperations(newConfig);
        GitUserSettings userSettings = newConfig.getCommonGitSettings();
        if (userSettings == null) {
            userSettings = version.getMembership(user.getUsername()).getGitSettings();
        }
        List<java.io.File> add = new LinkedList<>();
        add.add(version.getExportFilesDirectory().toFile());
        add.add(createMarkdownIndex(version, newConfig));
        for (File file : files)
            add.add(file.getPath().toFile());
        git.commitChanges(add, commitMessage, version.getRemoteDirectory().toFile(), userSettings);
        pullSynchronize(user, version);
        String[] mergeConflict = git.getFilesInMergeConflict(version.getRemoteDirectory().toFile());
        if (mergeConflict.length == 0) {
            git.push(version.getRemoteDirectory().toFile(), userSettings);
        } else {
            List<java.io.File> conflicts = getStorageFiles(mergeConflict, version);
            List<File> changedEntities = entities.setInMergeConflict(conflicts);
            fileRepository.saveAll(changedEntities);
        }

    }

    private List<java.io.File> getStorageFiles(String[] relFilePaths, Version version) {
        List<java.io.File> result = new LinkedList<>();
        for (String fileName : relFilePaths) {
            java.io.File file = version.getRemoteDirectory().resolve(fileName).toFile();
            if (file.exists())
                result.add(file);
        }
        return result;
    }

    public List<File> getDeletedByThemFiles(Version version, User user) {
        GitConfiguration config = version.getGitConfiguration();
        if (config == null)
            return new LinkedList<>();
        GitOperations git = new GitOperations(config);
        EntityOperations entities = new EntityOperations(version, user);
        String[] fileNames = git.getDeletedByThemFiles(version.getRemoteDirectory().toFile());
        List<java.io.File> systemFiles = getStorageFiles(fileNames, version);
        List<File> result = new LinkedList<>();
        for (java.io.File systemFile : systemFiles) {
            File file = entities.getFileFromVersion(systemFile.getName());
            if (file != null)
                result.add(file);
        }
        return result;
    }

    private java.io.File createMarkdownIndex(Version version, GitConfiguration gitConfig) throws IOException {
        Path indexPath = gitConfig.getPath(version);
        java.io.File index = indexPath.resolve("index.md").toFile();
        index.createNewFile();
        try (FileWriter fileWriter = new FileWriter(index)) {
            fileWriter.write("| file | raw | generated |\n");
            fileWriter.write("| ------ | ------ | ------ |\n");
            for (File file : version.getFiles()) {
                fileWriter.write("| ");
                fileWriter.write(file.getName().replace("_", ""));
                fileWriter.write(" | ");
                fileWriter.write("[RAW-Link](");
                fileWriter.write(indexPath.relativize(file.getPath().toFile().getCanonicalFile().toPath()).toString());
                fileWriter.write(")");
                fileWriter.write(" | ");
                List<String> exports = new LinkedList<>();
                for (java.io.File export : file.getExports()) {
                    String uri = indexPath.relativize(export.getCanonicalFile().toPath()).toString();
                    String link = getFileExtension(export.getName()).toUpperCase() + "-Link";
                    exports.add("[" + link + "](" + uri + ")");
                }
                fileWriter.write(String.join(" &nbsp; ", exports));
                fileWriter.write(" |\n");
            }
            fileWriter.flush();
        }
        return index;
    }

    private String getFileExtension(String fileName) {
        int dotIndex = fileName.lastIndexOf('.');
        if (dotIndex < 0)
            return "";
        return fileName.substring(dotIndex + 1);
    }

}
