import {Project, Version, ProjectLevel} from "../model/types";
import {DefaultRest} from "./index";
import {createEntity, fetchEntities, fetchFileWithPost} from "../services/rest";
import {FetchFileResponse} from "../services/http";
import {ROUTES} from "../constants/routes";
import {restVersion} from "./Version";

export interface ProjectRest extends DefaultRest<Project> {
    further: {
        getExports: (versions: Version[]) => Promise<FetchFileResponse>;
    };
}

export const restProject: ProjectRest = {
    interface: {
        id: true,
        name: true,
        level: true,
        description: true,
        versions: restVersion
    },
    get: (id: number) => {throw new Error("operation is not supported")},
    getAll: () => Promise.resolve([]),
    create: p => createEntity<Project>(p, `/projects`),
    delete: p => {throw new Error("operation is not supported")},
    put: p => {throw new Error("operation is not supported")},
    further: {
        getExports: versions => fetchFileWithPost(`${ROUTES.VERSIONS}/export`, versions),
    },
    modifiers: {},
};

export const restLevelProject = (level: ProjectLevel): ProjectRest => {
    return {... restProject,
        getAll: () => fetchEntities<Project>(`/projects/${level}`)}
};
