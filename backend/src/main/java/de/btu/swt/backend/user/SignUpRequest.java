package de.btu.swt.backend.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
class SignUpRequest {
    @NotNull
    private String username;
    @NotNull
    private String password;
    private String email;
}
