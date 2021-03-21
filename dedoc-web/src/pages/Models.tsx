import * as React from "react";

import M1ProjectsView from "../components/projects/m1/M1ProjectsView";
import {GrammarsProvider, ModelsProvider} from "../contexts/Projects";
import {UsersProvider} from "../contexts/Users";


export const Models = () => (
    <UsersProvider>
        <GrammarsProvider>
            <ModelsProvider>
                <M1ProjectsView/>
            </ModelsProvider>
        </GrammarsProvider>
    </UsersProvider>
);

// {
//     const history = useHistory();
//     const models = useEntityArray(restLevelProject(ProjectLevel.M1), showError);
//     const metas = useEntityArray(restLevelProject(ProjectLevel.M2), showError);
//     const users = useEntityArray(restUser, showError);
//
//     return <M1ProjectsView
//         history={history}
//         models={models}
//         grammars={metas}
//         users={users}
//     />;
// };