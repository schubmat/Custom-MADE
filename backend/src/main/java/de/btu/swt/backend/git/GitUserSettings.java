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

    public boolean equals(Object o) {
        if (o instanceof GitUserSettings) {
            GitUserSettings settings = (GitUserSettings) o;
            return this.name.equals(settings.getName()) && this.email.equals(settings.getEmail());
        }
        return false;
    }

    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public int hashCode() {
        return this.name.hashCode() + this.email.hashCode();
    }

}
