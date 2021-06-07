import * as React from "react";
import {useFullVersion} from "../contexts/FullProjectVersion";
import {useRef, useState} from "react";
import {useEffect} from "react";
import {message} from "antd";

interface LambdaRef {
    isLoading: boolean,
    error: Error | null,
}

const GitPullLoadingIndicator = ({children}: {children: React.ReactElement}) => {
    const loadingKey = "GIT PULL LOADING";
    const {isLoading, error} = useFullVersion();
    const lambda: LambdaRef = {isLoading, error};
    const lambdaRef = useRef(lambda);
    lambdaRef.current = lambda;
    const [isOpen, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (lambdaRef.current.isLoading && !lambdaRef.current.error) {
                message.loading({
                    content: "Synchronizing project...",
                    key: loadingKey,
                    duration: 0,
                });
                setOpen(true);
            }
        }, 3500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isLoading || !isOpen)
            return;
        message.success({
            content: "Done",
            key: loadingKey,
            duration: 1,
        });
    }, [isLoading]);


    return children;
};

export default GitPullLoadingIndicator;