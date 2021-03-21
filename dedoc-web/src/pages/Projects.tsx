import * as React from "react";

import M0ProjectsView from "../components/projects/m0/M0ProjectsView";
import {ModelsProvider, ProjectsProvider} from "../contexts/Projects";
import {UsersProvider} from "../contexts/Users";
import {GitAccountsProvider} from "../contexts/GitAccounts";

export const Projects = () => (
    <GitAccountsProvider>
        <UsersProvider>
            <ModelsProvider>
                <ProjectsProvider>
                    <M0ProjectsView/>
                </ProjectsProvider>
            </ModelsProvider>
        </UsersProvider>
    </GitAccountsProvider>
);