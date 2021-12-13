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

    @Autowired
    public LspController(LspRepository lspRepository) {
        this.lspRepository = lspRepository;
    }

    @Bean
    CommandLineRunner afterDataInitialize(LspRepository lspRepository) {
    	buildLspBinaries();
    	return null;        
    }

    private void buildLspBinaries() {
        log.info("Building lsp binaries.");
        final ClassLoader classLoader = getClass().getClassLoader();
        final File script = new File(Objects.requireNonNull(classLoader.getResource("lsp/manageLSP.sh")).getFile());
        log.info(ScriptRunner.run(script, CommandSupplements.INIT.toString()));
    }
    
    private boolean validate(User user, long id, Permissions actions) {
        LanguageServer lsp = lspRepository.getOne(id);
        return lsp.getVersion().getPermissions(user).contains(actions);
    }
}
