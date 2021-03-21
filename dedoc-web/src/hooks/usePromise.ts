import {useState} from "react";

export const usePromise = <T>(call: () => Promise<T>, onSuccess: (t: T) => void, onError: (error: Error) => void, final?: () => void) => {

    const [isLoading, setLoading] = useState<boolean>(false);

    const start = () => {
        if (isLoading)
            return;
        setLoading(true);
        call().then(onSuccess).catch(onError).finally(() => {
            setLoading(false);
            if (final)
                final();
        });
    };

    return {
        start: start,
        isLoading: isLoading,
    }
};
