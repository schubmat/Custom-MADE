package de.btu.swt.backend.storage;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.stream.Stream;

@Service
public class FileSystemStorageService implements StorageService {

    public FileSystemStorageService() {
        File file = Storage.ROOT.toFile();
        if (!file.exists()) {
            file.mkdirs();
        }
    }

    @Override
    public void createAndStore(String filename, String context) {
       //  try {
       //      PrintWriter writer = new PrintWriter(storageRoot.resolve(m1Models).resolve(filename).toString(), StandardCharsets.UTF_8);
       //      writer.print(context);
       //      writer.close();
       //  } catch (IOException e) {
       //      e.printStackTrace();
       //  }
    }

    @Override
    public void store(MultipartFile file, Path dir) {
        store(file, dir, StringUtils.cleanPath(file.getOriginalFilename()));
    }
    @Override
    public void store(MultipartFile file, Path dir, String filename) {
        try {
            if (file.isEmpty()) {
                throw new StorageException("Failed to store empty file " + filename);
            }
            if (filename.contains("..")) {
                // This is a security check
                throw new StorageException(
                        "Cannot store file with relative path outside current directory "
                                + filename);
            }
            File existingFile = dir.resolve(filename).toFile();
            if (existingFile.exists())
                existingFile.delete();
            else
                existingFile.mkdirs();
            try (InputStream inputStream = file.getInputStream()) {
                Files.copy(inputStream, dir.resolve(filename),
                        StandardCopyOption.REPLACE_EXISTING);
                existingFile.setExecutable(false);
                existingFile.setReadable(true, true);
                existingFile.setWritable(true, true);
            }
        } catch (IOException e) {
            throw new StorageException("Failed to store file " + filename + "|" + Storage.ROOT.toString(), e);
        }
    }

    @Override
    public Stream<Path> loadAll() {
        try {
            return Files.walk(Storage.ROOT, 1)
                    .filter(path -> !path.equals(Storage.ROOT))
                    .map(Storage.ROOT::relativize);
        } catch (IOException e) {
            throw new StorageException("Failed to read stored files", e);
        }

    }

    @Override
    public Path load(String filename) {
        return Storage.ROOT.resolve(filename);
    }

    @Override
    public Resource loadAsResource(String filename) {
        try {
            Path file = load(filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new StorageFileNotFoundException(
                        "Could not read file: " + filename);

            }
        } catch (MalformedURLException e) {
            throw new StorageFileNotFoundException("Could not read file: " + filename, e);
        }
    }

    @Override
    public void deleteAll() {
        FileSystemUtils.deleteRecursively(Storage.ROOT.toFile());
    }

    @Override
    public void delete(File file) {
        file.delete();
    }

    @Override
    public void init() {
        try {
            Files.createDirectories(Storage.ROOT);
        } catch (IOException e) {
            throw new StorageException("Could not initialize storage", e);
        }
    }

}