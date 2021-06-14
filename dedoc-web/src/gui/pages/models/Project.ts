import React, {useContext} from "react";
import {Project} from "../../../model/types";
import {State} from "../../../state/stateEntity";

const ProjectContext = React.createContext<State<Project> | null>(null);

// export const ProjectProvider = ({project, children} : {project: State<Project>, children: React.ReactNode}) => {
//     return withProps({children}, ProjectContext.Provider, project);
// };

export const ProjectProvider = ProjectContext.Provider;

export const useProject = () => {
    const context = useContext(ProjectContext);
    if (context == null)
        throw new Error("No ProjectProvider");

    const orderVersionsByName = () => {
        return context.versions.items.sort((a, b) => a.version < b.version ? -1 : 1);
    };

    return {
        project: context,
        orderVersionsByName: orderVersionsByName,
    };
};
