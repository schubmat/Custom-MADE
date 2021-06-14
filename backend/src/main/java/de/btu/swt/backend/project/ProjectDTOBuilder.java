package de.btu.swt.backend.project;

import de.btu.swt.backend.user.User;
import de.btu.swt.backend.util.DTOBuilder;

public class ProjectDTOBuilder extends DTOBuilder {

    public ProjectDTOBuilder(Project project, User user) {
        super(project);
        putCollection("versions", project.getVersions(user));
    }
}
