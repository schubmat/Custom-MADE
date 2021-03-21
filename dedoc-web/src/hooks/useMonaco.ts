import {useEffect, useState} from "react";

enum Action {READY, SET_CONTENT}

export interface MonacoState {
    fileId: number;
    content: string;
}

export const useMonaco = () => {
    const [state, setState] = useState<MonacoState>();
    const [isReady, setIsReady] = useState(false);
    const [editor, setEditor] = useState();

    const connect = () => {
        window.addEventListener("message", receiveMessage, false);
    };

    const disconnect = () => {
        setIsReady(false);
        window.removeEventListener("message", receiveMessage);
    };

    useEffect(() => {
        connect();
        return disconnect;
    }, []);

    const receiveMessage = (event: any) => {
        if (event === undefined)
            return;
        const message = event.data;
        if (message.action === undefined)
            return;
        if (message.action === Action.READY) {
            if (editor === undefined)
                setEditor(event.source);
            if (message.data === true)
                setIsReady(true);
            return;
        }
        if (message.action === Action.SET_CONTENT) {
            setState({
                fileId: message.data.fileId,
                content: message.data.content});
        }
    };

    const setMonacoState = (newState: MonacoState) => {
        if (state && newState.fileId == state.fileId && newState.content == state.content)
            return;
        sendMessageToEditor({
            action: Action.SET_CONTENT,
            data: {
                fileId: newState.fileId,
                fileContent: newState.content
            }
        });
    };

    const sendMessageToEditor = (message: any) => {
        if (editor !== undefined) {
            editor.postMessage(message, '*');
            return;
        }
        throw new Error("Cannot connect to editor");
    };

    const init = (lspPort: number) => {
        const initData = {
            lspPort: lspPort
        };
        sendMessageToEditor({
            action: Action.READY,
            data: initData
        });
    };

    return {
        state: state,
        setState: setMonacoState,
        isReady: isReady,
        init: init
    }
};