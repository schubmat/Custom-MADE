package de.btu.swt.backend.storage;


import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Path;
import java.util.stream.Stream;

public interface StorageService {

    void init();

    void createAndStore(String filename, String context);

    void store(MultipartFile file, Path dir);

    void store(MultipartFile file, Path dir, String filename);


    Stream<Path> loadAll();

    Path load(String filename);

    Resource loadAsResource(String filename);

    void deleteAll();

    void delete(File file);

}

