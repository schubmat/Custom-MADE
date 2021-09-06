import React, {useContext, useState} from "react";
import {State} from "../../../state/stateEntity";
import {Version} from "../../../model/types";
import {Setable, withProps} from "../../shared/contexts/with";

const Context = React.createContext<Setable<State<Version>[]> | null>(null);

export const SelectedProjectsProvider = ({children}: {children: React.ReactNode}) => {
    const value = useState<State<Version>[]>([]);
    return withProps({children, value}, Context.Provider);
};

export const useSelectedProjectsContext = () => {
    const context = useContext(Context);
    if (context == null)
        throw new Error("No SelectedProjectsProvider");

    return context;
};