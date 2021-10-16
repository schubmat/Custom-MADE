package de.btu.swt.backend.util;

import java.nio.file.Path;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NonNull;

@Data
@AllArgsConstructor
public class StringResponse {
	@NonNull
    private String answerString;
}
