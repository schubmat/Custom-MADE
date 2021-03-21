package de.btu.swt.backend.file;

import de.btu.swt.backend.util.DTOBuilder;

public class FileDTOBuilder extends DTOBuilder<File> {

    public FileDTOBuilder(File obj) {
        super(obj);
        withVersion();
    }

    private FileDTOBuilder withVersion() {
        putSingle("version", obj.getVersion());
        deleteField(new String[]{"files"});
        return this;
    }
}
