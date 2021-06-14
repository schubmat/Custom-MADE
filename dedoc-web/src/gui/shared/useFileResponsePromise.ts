import {FetchFileResponse} from "../../services/http";
import {usePromise} from "./usePromise";

export const useFileResponsePromise = (call: () => Promise<FetchFileResponse>,
                                       onSuccess: (response: FetchFileResponse) => void,
                                       onFail: (response: FetchFileResponse) => void,
                                       onError: (error: Error) => void,
                                       final?: () => void) => {


    const resolved = (response: FetchFileResponse) => {
        if (response.wasSuccessful)
            onSuccess(response);
        else
            onFail(response);
    };

    const promise = usePromise<FetchFileResponse>(call, resolved, onError, final);

    const start = () => {
        promise.start();
    };

    return {
        start,
        isLoading: promise.isLoading};
};