package de.btu.swt.backend.version.git_sync;

import de.btu.swt.backend.file.File;
import de.btu.swt.backend.git.GitConfiguration;
import de.btu.swt.backend.version.Version;
import org.apache.commons.io.FileUtils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Optional;

public class FileSystemOperations {

    private final Version version;
    private final Path backupDir;

    public FileSystemOperations(Version version) {
        this.version = version;
        backupDir = version.getRoot().resolve("backup");
    }

    public void createBackup() throws IOException {
        backupDir.toFile().mkdir();
        FileUtils.cleanDirectory(backupDir.toFile());
        copyToBackup(version.getSrcFilesDirectory());
        copyToBackup(version.getExportFilesDirectory());
    }

    private void copyToBackup(Path srcPath) throws IllegalArgumentException, IOException {
        Path result = version.getGeneralFilesDirectory().relativize(srcPath);
        Path targetPath = backupDir.resolve(result);
        FileUtils.copyDirectory(srcPath.toFile(), targetPath.toFile());
    }

    public void removeBackup() throws IOException {
        FileUtils.cleanDirectory(backupDir.toFile());
    }

    public void restoreBackup() throws IOException {
        Path filesDir = version.getGeneralFilesDirectory();
        FileUtils.deleteDirectory(filesDir.toFile());
        FileUtils.moveDirectory(backupDir.toFile(), version.getGeneralFilesDirectory().toFile());
    }

    void deleteRemoteFiles() throws IOException {
        FileUtils.cleanDirectory(version.getRemoteDirectory().toFile());
    }

    void createNewFilesLink(GitConfiguration newConfig) throws IOException {
        Path versionFiles = version.getGeneralFilesDirectory();
        if (!versionFiles.toFile().delete())
            FileUtils.deleteDirectory(versionFiles.toFile());
        Files.createSymbolicLink(versionFiles, newConfig.getPath(version));
    }

    void mergeExistingFiles(List<File> clonedFiles) throws IOException {
        Path relativizedSrcPath = version.getGeneralFilesDirectory().relativize(version.getSrcFilesDirectory());
        for (File oldFile : version.getFiles()) {
            File clonedFile = getClonedFile(oldFile, clonedFiles);
            if (clonedFile == null) {
                java.io.File backupFile = backupDir.resolve(relativizedSrcPath).resolve(oldFile.getFileName()).toFile();
                if (backupFile.exists())
                    Files.copy(backupFile.toPath(), version.getSrcFilesDirectory().resolve(oldFile.getName()));
            }
        }
        Path relativizedExportPath = version.getGeneralFilesDirectory().relativize(version.getExportFilesDirectory());
        FileUtils.copyDirectory(backupDir.resolve(relativizedExportPath).toFile(), version.getExportFilesDirectory().toFile());
    }

    private File getClonedFile(File backupFile, List<File> clonedFiles) {
        Optional<File> opt = clonedFiles.stream().filter(clonedFile -> clonedFile.getFileName().equals(backupFile.getFileName())).findFirst();
        if (!opt.isPresent())
            return null;
        return opt.get();
    }
}
