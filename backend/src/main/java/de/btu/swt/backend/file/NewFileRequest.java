package de.btu.swt.backend.file;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NonNull;

@Data
@AllArgsConstructor
class NewFileRequest {
    @NonNull
    private String name;
    @NonNull
    private Long versionId;
}
