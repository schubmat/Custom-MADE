import React, {useContext} from "react";
import {Version} from "../../../model/types";
import {State} from "../../../state/stateEntity";

const VersionContext = React.createContext<State<Version> | null>(null);

export const ProjectVersionProvider = VersionContext.Provider;

export const useProjectVersion = () => {
    const context = useContext(VersionContext);
    if (context == null)
        throw new Error("No ProjectVersionController");

    return context;
};