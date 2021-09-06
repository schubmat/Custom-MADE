import React, {useContext} from "react";
import {ArrayState} from "../../../state/stateArray";
import {Project, ProjectLevel, Version} from "../../../model/types";
import {restLevelProject} from "../../../rest_api/Project";
import {withProps} from "./with";
import {showError} from "../../../constants/functions";
import {useEntityArray} from "../../../state/useEntityArray";
import {State} from "../../../state/stateEntity";

const ProjectsContext = React.createContext<ArrayState<Project> | null>(null);
const ModelsContext = React.createContext<ArrayState<Project> | null>(null);
const GrammarsContext = React.createContext<ArrayState<Project> | null>(null);

const AbstractProjectsContext = (level: ProjectLevel) => {
    if (level == ProjectLevel.M0)
        return ProjectsContext;
    if (level == ProjectLevel.M1)
        return ModelsContext;
    if (level == ProjectLevel.M2)
        return GrammarsContext;
    throw new Error("No context found for ProjectLevel "+level);
};

const AbstractProjectsProvider = ({level, children}: {level: ProjectLevel, children: React.ReactNode}) => {
    const context = AbstractProjectsContext(level);
    const rest = restLevelProject(level);
    const projects = useEntityArray<Project>(rest, showError);
    return withProps({children, value: projects}, context.Provider);
};

const useAbstractProjects = (level: ProjectLevel) => {
    const context = useContext(AbstractProjectsContext(level));
    if (context == null)
        throw new Error("No ProjectsProvider");

    const getProjectFromVersion = (version: State<Version> | Version): State<Project> | undefined => {
        const fullProject = context.items.find(fullProject => fullProject.versions.items.find(v => v.id == version.id));
        if (fullProject === undefined)
            return undefined;
        return fullProject;
    };

    const getProjectFromImplementingVersion = (version: State<Version>): State<Project> | undefined => {
        return context.items.find(p => p.versions.items.find(v => v.id == version.grammarId));
    };

    const getProjectTitle = (version: State<Version> | Version): string => {
        const project = getProjectFromVersion(version);
        if (!project)
            return "???";
        return project.name;
    };

    const getFullTitle = (version: State<Version>): string => {
          const project = getProjectFromVersion(version);
          return (project ? project.name : "") + " " + version.version;
    };

    const orderVersionsByTitle = () => {
        const versions = context.items
            .map(fullProject => fullProject.versions.items)
            .reduce((previous, next) => previous.concat(next), []);
        return versions.sort((a, b) => getFullTitle(a) < getFullTitle(b) ? -1 : 1);
    };

    const orderProjectsByName = () => {
        return context.items.sort((a, b) => a.name < b.name ? -1 : 1)
    };

    const getVersionById = (versionId: number) => {
        return orderVersionsByTitle().find(version => version.id == versionId);
    };

    return {
        raw: context,
        getProjectTitle: getProjectTitle,
        getFullTitle: getFullTitle,
        orderProjectsByName: orderProjectsByName,
        orderVersionsByTitle: orderVersionsByTitle,
        getVersionById: getVersionById,
        getProjectFromVersion: getProjectFromVersion,
        getProjectFromImplementingVersion: getProjectFromImplementingVersion,
    }
};

export const ProjectsProvider = ({children}: {children: React.ReactNode}) => AbstractProjectsProvider({children: children, level: ProjectLevel.M0});
export const useProjects = () => useAbstractProjects(ProjectLevel.M0);

export const ModelsProvider = ({children}: {children: React.ReactNode}) => AbstractProjectsProvider({children: children, level: ProjectLevel.M1});
export const useModels = () => useAbstractProjects(ProjectLevel.M1);

export const GrammarsProvider = ({children}: {children: React.ReactNode}) => AbstractProjectsProvider({children: children, level: ProjectLevel.M2});
export const useGrammars = () => useAbstractProjects(ProjectLevel.M2);

export const useProjectLevel = (level: ProjectLevel) => useAbstractProjects(level);