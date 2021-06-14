package de.btu.swt.backend.util;

import io.micrometer.core.instrument.util.IOUtils;
import lombok.extern.slf4j.Slf4j;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringJoiner;
import java.util.concurrent.TimeUnit;

import static java.lang.System.arraycopy;

@Slf4j
public class ScriptRunner {

    public static String run(File scriptFile, String... arg) {
        String[] params = new String[arg.length + 1];
        params[0] = scriptFile.getPath();
        arraycopy(arg, 0, params, 1, arg.length);
        return run(new ProcessBuilder(params));
    }

    private static String run(ProcessBuilder processBuilder) {
        String result = "";
        try {
            Process process = processBuilder.start();
            final BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));

            StringJoiner sj = new StringJoiner(System.getProperty("line.separator"));
            reader.lines().iterator().forEachRemaining(sj::add);
            result = sj.toString();

            process.waitFor(15000, TimeUnit.MILLISECONDS);
            log.info("ScriptRunner (Input): " + IOUtils.toString(process.getInputStream()));
            log.info("ScriptRunner (Error): " + IOUtils.toString(process.getErrorStream()));
        } catch (InterruptedException | IOException e) {
            log.info(e.getMessage());
            Thread.currentThread().interrupt();
        }
        return result;
    }
}
