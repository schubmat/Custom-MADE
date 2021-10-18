import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router';
import {Layout, message} from "antd";
import Header from "../../shared/layout/Header";
import Sider from "../../shared/layout/sider/";
import {useLspFromVersion} from "./useLsp";
import {FileList} from "./FileList";
import {showError} from "../../../constants/functions";
import {useEditor} from "./useEditor";
import {FullVersionFromFileProvider, useFullVersion} from '../../shared/contexts/FullProjectVersion';
import {FileEditProvider} from "./FileEdit";
import GitPullLoadingIndicator from "../../shared/projects/GitPullLoadingIndicator";
import {ROUTES} from "../../../constants/routes";
import {TheiaEditor} from './Theia';
import {StringResponse, File} from "../../../model/types";
import {postWorkspaceUpdate} from "../../../services/rest";
import { useLocation } from "react-router-dom";

/* TODO refactoring
context für file-editing erstellen und editor hooks nach editor-component verschieben
 */

interface stateType {
    fileId?: string,
    wsDirectory?: string,
}

export const Editor = () => {

    const currentState = useLocation<stateType>();
    const fileId = Number(currentState.state.fileId);
    const wsDirectory = String(currentState.state.wsDirectory);

    return <FullVersionFromFileProvider fileId={fileId}>
        <FileEditProvider>
            <GitPullLoadingIndicator>
                <Page initFileId={fileId} wsDirectory={wsDirectory}/>
            </GitPullLoadingIndicator>
        </FileEditProvider>
    </FullVersionFromFileProvider>
};

const useEditorPage = (initFileId: number) => {
    const version = useFullVersion().version;
    const lsp = useLspFromVersion(version, showError);
    const editor = useEditor(lsp);
    const history = useHistory();

    useEffect(() => {
        if (editor.isLoading || !version || editor.state)
            return;
        const file = version.files.items.find(file => file.id === initFileId);
        if (!file) {
            message.error("Specified file does not belong to version");
            return;
        }
        editor.openFile(file);
    }, [editor.isLoading, version]);

    useEffect(() => {
        if (!version || !editor.state)
            return;
        if (version.files.items.length == 0) {
            history.push(`${ROUTES.VERSIONS}/${version.id}`);
            return;
        }
        const fileId = editor.state.fileId;
        const file = version.files.items.find(file => file.id == fileId);
        if (file) {
            editor.openFile(file);
            return;
        }
        editor.openFile(version.files.items[0]);
    }, [version]);

    const getFileName = (): string => {
        if (!version)
            return "";
        const id = editor.state ? editor.state.fileId : initFileId;
        const file = version.files.items.find(file => file.id === id);
        if (!file)
            return "";
        return file.name;
    };

    return {
        fileName: getFileName(),
        openFile: editor.openFile,
        version: version,
    }
};

const Page  = ({initFileId, wsDirectory}: {initFileId: number, wsDirectory: string}) => {
    const {fileName, openFile, version} = useEditorPage(initFileId);

    let pageTitle: string = fileName;
    
    if(version) {
        pageTitle = version.description;
    }   

    let projectWorkspace: string = wsDirectory;
    
    return (
        <Layout>
            <Sider/>
            <Layout style={{marginLeft: 200, height: '100vh', width: '100%'}}>
                <Header title={pageTitle}/>
                <Layout.Content>
                    <div style={{float: "left", width: "100%", height: "100%", padding: "10px"}}>
                        <TheiaEditor workspaceDir={projectWorkspace}/>
                    </div>
                </Layout.Content>
            </Layout>
        </Layout>
    );
};