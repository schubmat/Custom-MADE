package de.btu.swt.backend.lsp;

import com.fasterxml.jackson.annotation.JsonIgnore;
import de.btu.swt.backend.user.User;
import de.btu.swt.backend.util.ScriptRunner;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.File;
import java.net.Socket;
import java.util.Objects;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Slf4j
class LspInstance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private int port;

    @ManyToOne
    @NotNull
    private LanguageServer languageServer;

    @JsonIgnore
    @ManyToOne
    private User user = null;

    @JsonIgnore
    void start() {
        final ClassLoader classLoader = getClass().getClassLoader();
        final File script = new File(Objects.requireNonNull(classLoader.getResource("lsp/manageLSP.sh")).getFile());
        String[] params = {
                CommandSupplements.START.toString(),
                languageServer.getLanguageName(),
                languageServer.getVersion().getVersion(),
                String.valueOf(port)};
        log.info(ScriptRunner.run(script, params));
    }

    @JsonIgnore
    void stop() {
        final ClassLoader classLoader = getClass().getClassLoader();
        final File script = new File(Objects.requireNonNull(classLoader.getResource("lsp/manageLSP.sh")).getFile());
        String[] params = {
                CommandSupplements.KILL.toString(),
                languageServer.getLanguageName(),
                String.valueOf(port)};
        log.info(ScriptRunner.run(script, params));
    }

    @JsonIgnore
    boolean isFree() {
        return user == null;
    }

    @JsonIgnore
    boolean isReady() {
        try {
            Socket s = new Socket("127.0.0.1", port);
            s.close();
            return true;
        }
        catch(Exception e) {
            return false;
        }
    }

    @JsonIgnore
    void blockUntilReady() {
        while (!isReady()) {
            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {
                e.printStackTrace();
                Thread.currentThread().interrupt();
            }
        }
    }
}