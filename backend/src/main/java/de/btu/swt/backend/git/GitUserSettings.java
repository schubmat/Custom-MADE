package de.btu.swt.backend.git;

import de.btu.swt.backend.user.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Embeddable;
import java.util.Objects;

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

    /**
     * This method is present, to not overload the "equals" function without
     * overriding the function Object.equals(Object o) from the Object class.
     */
    @Override
    public boolean equals(Object o) {
        if (o instanceof GitUserSettings) {
            return equals(o);
        }
        return false;
    }

    /**
     * When overriding the "equals", the hash code function should be overwritten
     * too. See Sonarlint for more.
     */
    @Override
    public int hashCode() {
        return Objects.hash(this);
    }

}
