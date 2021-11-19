package de.btu.swt.backend.lsp;


import com.fasterxml.jackson.annotation.JsonIgnore;
import de.btu.swt.backend.util.ScriptRunner;
import de.btu.swt.backend.version.Version;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.File;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;


@Slf4j
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(exclude = {"version", "lspInstances"})
@ToString(exclude = {"version", "lspInstances"})
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

//    @OneToMany(mappedBy = "languageServer", cascade = CascadeType.ALL)
//    @JsonIgnore
//    private final List<LspInstance> lspInstances = new LinkedList<>();

//    @JsonIgnore
//    public List<LspInstance> getFreeInstances() {
//        return lspInstances.stream().filter(instance -> instance.isFree()).collect(Collectors.toList());
//
//    }
}
