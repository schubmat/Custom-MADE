import {LSPInstance, Version} from "../../../model/types";
import {useEffect, useState} from "react";
import {getStateEntity, State} from "../../../state/stateEntity";
import {restLsp} from "../../../rest_api/Lsp";
import { useBeforeunload } from 'react-beforeunload';

export const useLspFromVersion = (version: State<Required<Version>> | null, onError: (error: Error) => void): State<LSPInstance> | undefined => {
    const [state, setState] = useState<State<LSPInstance>>();
    const [currentVersionId, setCurrentVersionId] = useState<number | undefined>(undefined);
    let lspInstanceId: number | undefined = undefined;


    useEffect(() => {
        if (!version || !version.grammar || !version.grammar.languageServer)
            return;
        restLsp.get(version.grammar.languageServer.id).then(lsp => {
            lspInstanceId = lsp.id;
            setState(getStateEntity<LSPInstance>(lsp, e => setState(e)));
        }).catch(onError);
        return destroyLsp;
    }, [currentVersionId]);

    useEffect(() => {
        if (!version)
            return;
        if (version.id == currentVersionId)
            return;
        setCurrentVersionId(version.id);
    }, [version]);

    const destroyLsp = () => {
        // destroys on inner app navigation
        if (lspInstanceId)
            restLsp.further.destroy(lspInstanceId).catch(() => {});
        // destorys on outer app navigation
        else if (state && state.id != lspInstanceId)
            restLsp.further.destroy(state.id).catch(() => {});
    };

    useBeforeunload((e) => {
        destroyLsp();
    });

    return state;
};