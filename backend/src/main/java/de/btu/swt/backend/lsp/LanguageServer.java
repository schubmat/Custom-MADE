package de.btu.swt.backend.lsp;

import com.fasterxml.jackson.annotation.JsonIgnore;
import de.btu.swt.backend.version.Version;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Slf4j
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(exclude = {"version"})
@ToString(exclude = {"version"})
@Table(name = "languageserver")
@Entity
public class LanguageServer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * name is equal to branch and git will use it for checkout
     */
    @NotNull
    private String languageName;

    @JsonIgnore
    @OneToOne(mappedBy = "languageServer")
    private Version version;

}
