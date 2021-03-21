package de.btu.swt.backend.version.git_sync;

import de.btu.swt.backend.file.File;
import de.btu.swt.backend.file.FileStatus;
import de.btu.swt.backend.user.User;
import de.btu.swt.backend.version.Version;

import java.util.LinkedList;
import java.util.List;

public class EntityOperations {

    private final Version version;
    private final User user;

    EntityOperations(Version version, User user) {
        this.version = version;
        this.user = user;
    }

    List<File> createOrUpdateFileEntities(Iterable<java.io.File> remoteFiles) {
        List<File> modified = new LinkedList<>();
        for (java.io.File clonedFile : remoteFiles) {
            if (clonedFile.isDirectory())
                continue;
            String fileName = clonedFile.getName();
            if (!version.matchesFileExtension(fileName))
                continue;
            File entity = getFileFromVersion(fileName);
            if (entity == null) {
                int dotIndex = fileName.lastIndexOf('.');
                fileName = fileName.substring(0, dotIndex);
                entity = File.create(fileName, version, user);
                version.getFiles().add(entity);
            }
            entity.setStatus(FileStatus.UNCHECKED);
            modified.add(entity);
        }
        return modified;
    }

    List<File> setInMergeConflict(Iterable<java.io.File> unmergedFiles) {
        List<File> modified = new LinkedList<>();
        for (java.io.File clonedFile : unmergedFiles) {
            if (clonedFile.isDirectory())
                continue;
            String fileName = clonedFile.getName();
            if (!version.matchesFileExtension(fileName))
                continue;
            File entity = getFileFromVersion(fileName);
            if (entity != null) {
                entity.setStatus(FileStatus.IN_CONFLICT);
                modified.add(entity);
            }
        }
        return modified;
    }

    public File getFileFromVersion(String fileName) {
        for (File file : version.getFiles()) {
            if (file.getFileName().equals(fileName))
                return file;
        }
        return null;
    }

    List<File> deleteRemovedFileEntities() {
        List<File> deletedFiles = new LinkedList<>();
        for (File file: version.getFiles()) {
            if (!file.getPath().toFile().exists())
                deletedFiles.add(file);
        }
        return deletedFiles;
    }
}
