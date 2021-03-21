package de.btu.swt.backend.lsp;

import de.btu.swt.backend.util.ScriptRunner;
import lombok.extern.slf4j.Slf4j;

import java.io.File;
import java.util.Objects;

@Slf4j
public class LspUtil {
    public static void createLanguage(String languageName, String version) {
        final ClassLoader classLoader = LspUtil.class.getClassLoader();
        final File script = new File(Objects.requireNonNull(classLoader.getResource("lsp/manageLSP.sh")).getFile());
        String[] params = {
                CommandSupplements.CREATE.toString(),
                languageName,
                version};
        log.info(ScriptRunner.run(script, params));
    }
}
