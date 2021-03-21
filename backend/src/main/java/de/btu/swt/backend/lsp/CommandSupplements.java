package de.btu.swt.backend.lsp;

import lombok.Getter;

@Getter
public enum CommandSupplements {
    INIT("init"),
    CREATE("createNewLanguage"),
    BUILD("buildNewLSP"),
    START("start"),
    KILL("kill"),
    KILL_ALL("killAll"),
    KILL_ALL_FROM_LANG("killAll-fromLanguage");

    private final String textValue;

    CommandSupplements(String commandSupplement) {
        this.textValue = commandSupplement;
    }

    @Override
    public String toString() {
        return this.textValue;
    }
}
