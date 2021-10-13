package de.btu.swt.backend.version;

import de.btu.swt.backend.util.DTOBuilder;

public class VersionDTOBuilder extends DTOBuilder<Version> {

    public VersionDTOBuilder(Version obj) {
        super(obj);
        withProject();
        withFiles();
        withLanguageServer();
        withGrammar();
//        System.err.println("#####################");
//        System.err.println(((Version)this.obj).toString());
//        System.err.println("#####################");
    }

    private VersionDTOBuilder withProject() {
        putSingle("project", this.obj.getProject());
        deleteField(new String[]{"project", "versions"});
        return this;
    }

    private VersionDTOBuilder withFiles() {
        putCollection("files", this.obj.getFiles());
        return this;
    }

    private VersionDTOBuilder withLanguageServer() {
        putSingle("languageServer", this.obj.getLanguageServer());
        return this;
    }

    private VersionDTOBuilder withGrammar() {
        Version grammar = this.obj.getGrammar();
        if (grammar != null) {
            putSingle("grammar", new VersionDTOBuilder(grammar).build());
        }
        return this;
    }

}
