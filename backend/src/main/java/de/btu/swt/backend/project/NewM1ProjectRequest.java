package de.btu.swt.backend.project;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
class NewM1ProjectRequest {
    @NonNull
    private String name;
    private String description;
    @NonNull
    private VisibilityLevel visibilityLevel;
}
