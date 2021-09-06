import {RestApi} from "../rest_api";
import {getStateEntity, State} from "./stateEntity";
import {useEffect, useState} from "react";

export const useEntity = <T>(id: number, rest: RestApi<T>, onError: (error: Error) => void) => {
    const [state, setState] = useState<State<Required<T>> | null>(null);

    useEffect(() => {
        // @ts-ignore
        rest.get(id).then((entity: Required<T>) => {
                const s = getStateEntity<Required<T>>(entity, e => setState(e));
                setState(s);
            }).catch(onError);
    }, []);

    return state;
};