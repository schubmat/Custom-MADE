import React, {useContext} from "react";
import {File} from "../model/types";
import {State} from "../model/stateEntity";


const FileContext = React.createContext<State<File> | null>(null);

export const FileProvider = FileContext.Provider;

export const useFileContext = (): State<File> => {
    const context = useContext(FileContext);
    if (context == null)
        throw new Error("No FileProvider");

    return context;
};