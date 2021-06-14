import * as React from "react";

import M0ProjectsView from "./M0ProjectsView";
import {ModelsProvider, ProjectsProvider} from "../../shared/contexts/Projects";
import {UsersProvider} from "../../shared/contexts/Users";
import {GitAccountsProvider} from "./edit_gitconfig/GitAccounts";

export const ProjectsPage = () => (
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