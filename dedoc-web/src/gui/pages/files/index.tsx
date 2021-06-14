import * as React from "react";
import {useParams} from "react-router";
import {FilesView} from "./FilesView";
import {FullVersionProvider} from "../../shared/contexts/FullProjectVersion";
import GitPullLoadingIndicator from "../../shared/projects/GitPullLoadingIndicator";


export const FilesPage = () => {
    const {id} = useParams();
    return (
        <FullVersionProvider id={Number(id)}>
            <GitPullLoadingIndicator>
                <FilesView/>
            </GitPullLoadingIndicator>
        </FullVersionProvider>
    );

};