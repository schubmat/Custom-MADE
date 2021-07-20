package de.btu.swt.backend.storage;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public interface FileRepresentation {

    @JsonIgnore
    Path getDir();

    @JsonIgnore
    String getFileName();

    @JsonIgnore
    private Path getFile() {
        Path dir = getDir();
        String fileName = getFileName();
        Path path = dir.resolve(fileName);
        return path;
    }

    @JsonIgnore
    default void setFileContent(String fileContent) throws IOException {
        File file = getFile().toFile();
        if (!file.exists()) {
            Path dir = getDir();
            dir.toFile().mkdirs();
            file.createNewFile();
        }

        // There is no need for closing the writer, if this syntax is used.
        try (FileWriter fileWriter = new FileWriter(file)) {
            fileWriter.write(fileContent);
            fileWriter.flush();
        }
    }

    @JsonIgnore
    default String getFileContent() {
        if (!getFile().toFile().exists())
            return "";
        try {
            return new String(Files.readAllBytes(getFile()));
        } catch (IOException e) {
            //log.error("Unable to read file \""+getFile()+"\": "+e.getMessage());
            return null;
        }
    }
}
