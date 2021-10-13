package de.btu.swt.backend.version;

import de.btu.swt.backend.util.DTOBuilder;

public class VersionDTOBuilder extends DTOBuilder<Version> {

    public VersionDTOBuilder(Version obj) {
        super(obj);
        withProject();
        withFiles();
        withLanguageServer();
        withGrammar();
        
        ((Version) this.obj).configureVersionWorkspace();
    }

    private VersionDTOBuilder withProject() {
        putSingle("project", ((Version) this.obj).getProject());
        deleteField(new String[]{"project", "versions"});
        return this;
    }

    private VersionDTOBuilder withFiles() {
        putCollection("files", ((Version) this.obj).getFiles());
        return this;
    }

    private VersionDTOBuilder withLanguageServer() {
        putSingle("languageServer", ((Version) this.obj).getLanguageServer());
        return this;
    }

    private VersionDTOBuilder withGrammar() {
        Version grammar = ((Version) this.obj).getGrammar();
        if (grammar != null) {
            putSingle("grammar", new VersionDTOBuilder(grammar).build());
        }
        return this;
    }

}
