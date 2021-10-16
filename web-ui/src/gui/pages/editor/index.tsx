import React, {useEffect} from 'react';
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
import {MonacoEditor} from './MonacoEditor';

/* TODO refactoring
context für file-editing erstellen und editor hooks nach editor-component verschieben
 */

interface Params {
    ws?: string,
    // file? : string,
}

export const Editor = () => {
    const params: Params = useParams();
    const wsDirectory: string = String(params.ws).replace(" ", "%20");
    // const fileId = Number(params.file);

    console.log("====")
    console.log(wsDirectory)
    console.log("====")

    return <Page initWorkspaceDir={wsDirectory}/>;
    // return <FullVersionFromFileProvider fileId={fileId}>
    //     <FileEditProvider>
    //         <GitPullLoadingIndicator>
    //             <Page initWorkspaceDir={wsDirectory}/>
    //         </GitPullLoadingIndicator>
    //     </FileEditProvider>
    // </FullVersionFromFileProvider>
};
/* 
const useEditorPage = (workspaceDir: string) => {
    const version = useFullVersion().version;
    const lsp = useLspFromVersion(version, showError);
    const editor = useEditor(lsp);
    const history = useHistory();

    useEffect(() => {
        /* if (editor.isLoading || !version || editor.state)
            return;
        const file = version.files.items.find(file => file.id === initFileId);
        if (!file) {
            message.error("Specified file does not belong to version");
            return;
        } 
        editor.openFile(workspaceDir);
    }, [editor.isLoading, version]);

    useEffect(() => {
        if (!version || !editor.state)
            return;
        if (version.files.items.length == 0) {
            history.push(`${ROUTES.VERSIONS}/${version.versionId}`);
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
    }
}; */

const Page = ({initWorkspaceDir}: {initWorkspaceDir: string}) => {
    // const {fileName, openFile} = useEditorPage(initWorkspaceDir);
    const version = useFullVersion().version;

    var headTitle;
    if (version) {
        headTitle = version.project.name;
    } else {
        headTitle = 'TODO';
    }

    return (
        <Layout>
            <Sider/>
            <Layout style={{marginLeft: 200, height: '100vh', width: '100%'}}>
                <Header title={headTitle}/>
                <Layout.Content>
                    <div style={{float: "left", width: "100%", height: "100%", padding: "10px"}}>
                        TEST
                    </div>
                </Layout.Content>
            </Layout>
        </Layout>
    );
};
