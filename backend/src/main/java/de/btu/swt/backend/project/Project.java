package de.btu.swt.backend.project;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import de.btu.swt.backend.user.User;
import de.btu.swt.backend.version.Version;
import lombok.*;
import org.hibernate.Hibernate;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
@Setter
@EqualsAndHashCode(exclude = {"owner", "versions"})
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"owner", "versions"})
@Table(name = "project")
@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NonNull
    private String name;
    @NonNull
    private ProjectLevel level;
    private String description;

    @NonNull
    @ManyToOne
    @JsonIgnore
    private User owner;

    @JsonIgnore
    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL)
    private final Set<Version> versions = new HashSet<>();

    @JsonProperty("versions")
    public Set<Version> getVersions(UserDetails userDetails) {
        String username = userDetails.getUsername();
        return versions.stream()
                .filter(version -> version.getVisibility() == VisibilityLevel.PUBLIC
                        || owner.getUsername().equals(username)
                        || version.getMemberships()
                        .stream()
                        .anyMatch(versionMemberships -> versionMemberships.getUser()
                                .getUsername()
                                .equals(username)
                        ))
                .map(version -> (Version) Hibernate.unproxy(version))
                .collect(Collectors.toSet());
    }
}
