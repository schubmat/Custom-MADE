import {State} from "../../../state/stateEntity";
import {File, FileStatus} from "../../../model/types";
import {useFullVersion} from "../../shared/contexts/FullProjectVersion";
import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {Setable, withProps} from "../../shared/contexts/with";
import {ValidatedVersion} from "../../../rest_api/Version";

interface FileEdit {
    unsavedFiles: Setable<State<File>[]>,
    localChanges: Setable<Map<number, string>>,
    localChangeIndicator: Setable<boolean>,
    isPending: Setable<Set<number>>,
}

const FileEditContext = React.createContext<FileEdit | null>(null);

const getLocalChange = (file: File | State<File>, localChanges: Map<number, string>): string => {
    if (!localChanges.has(file.id))
        return file.content;
    const localChange = localChanges.get(file.id);
    if (localChange)
        return localChange;
    return "";
};

export const FileEditProvider = ({children}: {children: React.ReactNode}) => {
    const version = useFullVersion().version;
    const [unsavedFiles, setUnsavedFiles] = useState<State<File>[]>([]);
    const [localChanges, setLocalChanges] = useState<Map<number, string>>(new Map());
    const [localChangeIndicator, setLocalChangeIndicator] = useState<boolean>(false);
    const [isPending, setPending] = useState<Set<number>>(new Set<number>());

    const updateUnsavedFiles = () => {
        if (!version)
            return;
        const files = version.files.items.filter(file => getLocalChange(file, localChanges) !== file.content || file.status === FileStatus.IN_CONFLICT);
        setUnsavedFiles(files);
    };

    useEffect(updateUnsavedFiles, [version, localChanges]);
    useEffect(() => setLocalChangeIndicator(!localChangeIndicator), [localChanges]);

    return withProps({children, value: {
        unsavedFiles: [unsavedFiles, setUnsavedFiles],
        localChanges: [localChanges, setLocalChanges],
        localChangeIndicator: [localChangeIndicator, setLocalChangeIndicator],
        isPending: [isPending, setPending]}}, FileEditContext.Provider);
};

export const useFileEditContext = () => {
    const context = useContext(FileEditContext);
    if (context == null)
        throw new Error("No FileEditProvider");
    const [unsavedFiles, setUnsavedFiles] = context.unsavedFiles;
    const [localChanges, setLocalChanges] = context.localChanges;
    const [localChangeIndicator, setLocalChangeIndicator] = context.localChangeIndicator;
    const [isPending, setPending] = context.isPending;
    const version = useFullVersion();

    const _getLocalChange = (file: File | State<File>) => {
        return getLocalChange(file, localChanges);
    };

    const localChangeFile = (fileId: number, content: string) => {
        setLocalChanges(new Map(localChanges.set(fileId, content)));
    };

    const saveLocalChanges = (onSuccess: (validatedVersion: ValidatedVersion) => void, onError: (error: Error) => void) => {
        const rest = version.version;
        if (!rest)
            return;
        const files = [...unsavedFiles];
        if (files.length == 0)
            return;
        if (files.find(file => isPending.has(file.id)))
            return;
        definePending(files, true);
        const dtos = unsavedFiles.map(file => {return {id: file.id, content: _getLocalChange(file)}});
        rest.setFileContents({versionId: rest.id, files: dtos}).then(newVersion => {
            newVersion.files.forEach(file => localChangeFile(file.id, file.content));
            rest.validateFiles({id: newVersion.id, files: dtos.map(dto => dto.id)})
                .then(onSuccess)
                .finally(() => definePending(files, false));
        }).catch(error => {
            definePending(files, false);
            onError(error);
        });
    };

    const definePending = (files: File[] | State<File>[], value: boolean) => {
          const pending = new Set<number>(isPending);
          if (value)
              files.forEach((file : File | State<File>) => pending.add(file.id));
          else
              files.forEach((file : File | State<File>) => pending.delete(file.id));
          setPending(pending);
    };

    const isFilePending = (fileId: number) => isPending.has(fileId);

    return {
        unsavedFiles: unsavedFiles,
        getLocalChange: _getLocalChange,
        setLocalChange: localChangeFile,
        localChangeIndicator: localChangeIndicator,
        saveLocalChanges: saveLocalChanges,
        isPending: isFilePending,
    }
};