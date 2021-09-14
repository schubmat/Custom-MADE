import {File, LSPInstance} from "../../../model/types";
import {State} from "../../../state/stateEntity";
import {showError} from "../../../constants/functions";
import {useMonaco} from "./useMonaco";
import {useEffect, useState} from "react";
import {useFileEditContext} from "./FileEdit";
import {useFullVersion} from "../../shared/contexts/FullProjectVersion";

export const useEditor = (lspRefactor: State<LSPInstance> | undefined) => {
    const [isLoading, setLoading] = useState(true);
    const fileChangesRefactor = useFileEditContext();
    const monaco = useMonaco();
    const version = useFullVersion().version;

    useEffect(() => {
        if (!isLoading)
            return;
        if (!lspRefactor)
            return;
        if (!monaco.isReady)
            return;
        try {
            monaco.init(lspRefactor.port);
        } catch (error) {
            showError(error);
        }
        setLoading(false);
    }, [lspRefactor, monaco.isReady]);

    useEffect(() => {
        if (!monaco.state)
            return;
        fileChangesRefactor.setLocalChange(monaco.state.fileId, monaco.state.content);
    }, [monaco.state]);

    useEffect(() => {
        if (!monaco.state || !version)
            return;
        const fileId = monaco.state.fileId;
        const file = version.files.items.find(file => file.id == fileId);
        if (!file)
            return;
        openFile(file);
    }, [fileChangesRefactor.localChangeIndicator]);

    const openFile = (file: File | State<File>) => {
        if (!monaco.isReady)
            throw new Error("Monaco is not ready");
        const fileContent = fileChangesRefactor.getLocalChange(file);
        monaco.setState({fileId: file.id, content: fileContent});
    };

    return {
        isLoading: isLoading,
        openFile: openFile,
        state: monaco.state
    }
};