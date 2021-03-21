package de.btu.swt.backend.project;


import org.springframework.core.convert.converter.Converter;

public class ProjectLevelEnumConverter implements Converter<String, ProjectLevel> {
    @Override
    public ProjectLevel convert(String s) {
        return ProjectLevel.valueOf(s);
    }
}
