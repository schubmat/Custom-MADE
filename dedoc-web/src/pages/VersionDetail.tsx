import * as React from "react";
import {useParams} from "react-router";
import {FilesView} from "../components/files/FilesView";
import {FullVersionProvider} from "../contexts/FullProjectVersion";
import GitPullLoadingIndicator from "../components/projects/GitPullLoadingIndicator";


export const VersionDetail = () => {
    const {id} = useParams();
    return (
        <FullVersionProvider id={Number(id)}>
            <GitPullLoadingIndicator>
                <FilesView/>
            </GitPullLoadingIndicator>
        </FullVersionProvider>
    );

};