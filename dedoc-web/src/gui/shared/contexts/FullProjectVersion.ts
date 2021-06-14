import React, {useContext, useEffect, useState} from "react";
import {Version} from "../../../model/types";
import {State} from "../../../state/stateEntity";
import {useEntity} from "../../../state/useEntity";
import {restVersion, restVersionFromFile} from "../../../rest_api/Version";
import {withProps} from "./with";


interface Context {
    version: State<Required<Version>> | null,
    isLoading: boolean,
    error: Error | null,
}

const FullVersionContext = React.createContext<Context | null>(null);

export const FullVersionProvider = ({id, children}: {id: number, children: React.ReactNode}) => {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const version = useEntity(id, restVersion, setError);

    useEffect(() => {
        if (isLoading && version)
            setLoading(false);
    }, [version]);
    return withProps({children, value: {version, isLoading, error}}, FullVersionContext.Provider);
};

export const FullVersionFromFileProvider = ({fileId, children}: {fileId: number, children: React.ReactNode}) => {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const version = useEntity(fileId, restVersionFromFile, setError);

    useEffect(() => {
        if (isLoading && version)
            setLoading(false);
    }, [version]);
    return withProps({children, value: {version, isLoading, error}}, FullVersionContext.Provider);
};

export const useFullVersion = () => {
    const context = useContext(FullVersionContext);
    if (context == null)
        throw new Error("No FullVersionProvider");
    const {version, isLoading, error} = context;

    const orderFilesByName = () => {
        if (!version)
            return [];
        return version.files.items.sort((a, b) => a.name < b.name ? -1 : 1);
    };

    const getFullTitle = (): string => {
        if (!version)
            return "";
        return version.project.name  + " " + version.version;
    };

    return {
        version: version,
        isLoading: isLoading,
        error: error,
        orderFilesByName: orderFilesByName,
        getFullTitle: getFullTitle,
    }
};