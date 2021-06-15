package de.btu.swt.backend.lsp;

import de.btu.swt.backend.user.User;
import de.btu.swt.backend.user.UserRepository;
import de.btu.swt.backend.util.Port;
import de.btu.swt.backend.util.ScriptRunner;
import de.btu.swt.backend.version.Permissions;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PreDestroy;
import java.io.File;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Slf4j
@Configuration
@RestController
@RequestMapping("/lsps")
public class LspController {

    private LspRepository lspRepository;
    private LspInstanceRepository instanceRepository;
    private UserRepository userRepository;

    @Autowired
    public LspController(LspRepository lspRepository, LspInstanceRepository instanceRepository, UserRepository userRepository) {
        this.lspRepository = lspRepository;
        this.instanceRepository = instanceRepository;
        this.userRepository = userRepository;
    }

    @Bean
    CommandLineRunner afterDataInitialize(LspRepository lspRepository) {
        buildLspBinaries();
        return args -> {
            log.info("afterDataInitialize");
            List<LanguageServer> lsps = lspRepository.findAll();
            for (LanguageServer lsp : lsps) {
                startLspInstance(lsp);
            }
        };
    }

    private void buildLspBinaries() {
        log.info("Building lsp binaries.");
        final ClassLoader classLoader = getClass().getClassLoader();
        final File script = new File(Objects.requireNonNull(classLoader.getResource("lsp/manageLSP.sh")).getFile());
        log.info(ScriptRunner.run(script, CommandSupplements.INIT.toString()));
    }

    private LspInstance startLspInstance(LanguageServer languageServer) {
        int freePort = Port.getPort();
        LspInstance lspInstance = LspInstance.builder()
                .languageServer(languageServer)
                .port(freePort)
                .build();
        lspInstance = instanceRepository.save(lspInstance);
        log.info("Starting lsp instance on port: " + freePort);
        lspInstance.start();
        return lspInstance;
    }

    @GetMapping("/{lspId}")
    public ResponseEntity getLspInstance(@AuthenticationPrincipal UserDetails userDetails, @PathVariable long lspId) {

        Optional<User> opt = userRepository.findByUsername(userDetails.getUsername());
        if (!opt.isPresent())
            return null;
        User user = opt.get();

        if (!validate(user, lspId, Permissions.USE))
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("No binaries for the language server exists or user does not have permissions to browse file");
        LanguageServer lsp = lspRepository.getOne(lspId);
        LspInstance lspInstance;
        List<LspInstance> freeInstances = lsp.getFreeInstances();
        if (freeInstances.isEmpty()) {
            log.warn("LSP "+lsp.getLanguageName()+" has no free instance");
            lspInstance = startLspInstance(lsp);
        }
        else {
            lspInstance = freeInstances.get(0);
        }
        if (freeInstances.size() <= 1) {
            //start new instance for the next request
            startLspInstance(lsp);
        }
        lspInstance.setUser(user);
        instanceRepository.save(lspInstance);
        lspInstance.blockUntilReady();
        return ResponseEntity.ok(LspInstanceDTOUtils.lspInstanceToDTO(lspInstance));
    }

    @PostMapping(value = "/instances/{instanceId}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity removeLspInstance(@AuthenticationPrincipal User userDetails, @PathVariable long instanceId) {
        Optional<LspInstance> optionalInstance = instanceRepository.findById(instanceId);
        if (!optionalInstance.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("There is no lsp-instance with given id: " + instanceId);
        }
        LspInstance lspInstance = optionalInstance.get();
        if (lspInstance.getUser().getId().equals(userDetails.getId())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User "+ userDetails.getUsername() + " is not allowed to kill lsp-instance " + instanceId);
        }
        log.info("Stopping lsp instance on port: " + lspInstance.getPort());
        lspInstance.stop();
        instanceRepository.delete(lspInstance);
        return ResponseEntity.ok("Stopped lsp instance.");
    }

    @PreDestroy
    public void destroy() {
        final ClassLoader classLoader = getClass().getClassLoader();
        final File script = new File(Objects.requireNonNull(classLoader.getResource("lsp/manageLSP.sh")).getFile());
        log.info("Killing all lsp instances: ");
        ScriptRunner.run(script, CommandSupplements.KILL_ALL.toString());
    }

    private boolean validate(User user, long id, Permissions actions) {
        LanguageServer lsp = lspRepository.getOne(id);
        return lsp.getVersion().getPermissions(user).contains(actions);
    }
}
