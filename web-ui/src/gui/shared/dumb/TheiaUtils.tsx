import * as React from "react";

import {File, Version} from "../../../model/types";
import {State} from "../../../state/stateEntity";
import {ROUTES} from "../../../constants/routes";
import {
    postWorkspaceUpdate,
} from "../../../services/rest";

interface TheiaWorkspaceUtils { 
    // activities: {
    openWorkspace (file: State<File>) : Promise<Required<any>>;
        // openWorkspace: (args: {versionId: number}) => Promise<Required<Version>>,
    // }
}

class TheiaWorkspaceController implements TheiaWorkspaceUtils { 

    openWorkspace (file: State<File>) : Promise<Required<any>> {

        if (file) {
            // let fileEntity = file.getEntity() as File;
            // let versionEntity = fileEntity.version as Version;
            // console.dir(file);
            
            return postWorkspaceUpdate(`${ROUTES.FILES}/${file.id}/openFileInWorkspace`, file.id);
            // postWorkspaceUpdate<Required<Version>>(file.id)
            // history.push(`${ROUTES.VERSIONS}/openWorkspace/${file.id}`);
        }

        throw new Error("No file for opening has been provided.");
    };
}

export default TheiaWorkspaceController;
