import * as React from "react";

import M1ProjectsView from "./M1ProjectsView";
import {GrammarsProvider, ModelsProvider} from "../../shared/contexts/Projects";
import {UsersProvider} from "../../shared/contexts/Users";


export const ModelsPage = () => (
    <UsersProvider>
        <GrammarsProvider>
            <ModelsProvider>
                <M1ProjectsView/>
            </ModelsProvider>
        </GrammarsProvider>
    </UsersProvider>
);