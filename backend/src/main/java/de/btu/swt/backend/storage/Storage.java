package de.btu.swt.backend.storage;

import java.nio.file.Path;
import java.nio.file.Paths;

public interface Storage {
    Path ROOT = Paths.get("src/main/resources/storage");
    Path TMP = Paths.get("src/main/resources/tmp");
}
