package de.btu.swt.backend.version;

import de.btu.swt.backend.file.File;
import de.btu.swt.backend.file.FileValidationDTO;
import de.btu.swt.backend.util.ErroneousFile;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.*;

@NoArgsConstructor
@Getter
@Setter
public class VersionValidationDTO {
    Map version;
    Collection<FileValidationDTO> fileLogs;

    public VersionValidationDTO(Version version, Deque<ErroneousFile> erroneousFiles) {
        this.version = new VersionDTOBuilder(version).build();
        fileLogs = new LinkedList<>();
        for (File file : version.getFiles()) {
            Optional<ErroneousFile> fail = erroneousFiles.stream().filter(e -> e.file.getId() == file.getId()).findFirst();
            String log = fail.isPresent() ? fail.get().log : "";
            fileLogs.add(new FileValidationDTO(file, log));
        }
    }
}
