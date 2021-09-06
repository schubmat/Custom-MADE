import React, {useContext, useState} from "react";
import {State} from "../../../state/stateEntity";
import {File} from "../../../model/types";
import {Setable, withProps} from "../../shared/contexts/with";

const Context = React.createContext<Setable<State<File>[]> | null>(null);

export const SelectedFilesProvider = ({children}: {children: React.ReactNode}) => {
    const value = useState<State<File>[]>([]);
    return withProps({children, value}, Context.Provider);
};

export const useSelectedFilesContext = () => {
    const context = useContext(Context);
    if (context == null)
        throw new Error("No SelectedFilesProvider");

    return context;
};