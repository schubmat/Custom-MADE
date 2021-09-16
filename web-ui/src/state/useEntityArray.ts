import {RestApi} from "../rest_api";
import {useEffect, useState} from "react";
import {ArrayState, getArrayState} from "./stateArray";

export const useEntityArray = <T>(rest: RestApi<T>, onError: (error: Error) => void) => {
    const [state, setState] = useState<ArrayState<T>>(getArrayState<T>([], arry => setState(arry), rest));

    useEffect(() => {
        state.getAll().catch(onError);
    }, []);

    return state;
};