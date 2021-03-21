package de.btu.swt.backend.git;

import de.btu.swt.backend.user.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Embeddable;

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class GitUserSettings {

    public static GitUserSettings getDefaultSettings(User user) {
        return new GitUserSettings(user.getUsername(), user.getEmail());
    }

    @NonNull
    private String name;
    @NonNull
    private String email;

    public boolean equals(GitUserSettings other) {
        return name.equals(other.name) && email.equals(other.email);
    }
}
