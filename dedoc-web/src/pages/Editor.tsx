import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router';
import {Layout, message} from "antd";
import Sider from "../components/navigation/Sider";
import Header from "../components/navigation/Header";
import {useLspFromVersion} from "../hooks/useLsp";
import {FileList} from "../components/files/FileList";
import {showError} from "../constants/functions";
import {useEditor} from "../hooks/useEditor";
import {FullVersionFromFileProvider, useFullVersion} from '../contexts/FullProjectVersion';
import {FileEditProvider} from "../contexts/FileEdit";
import GitPullLoadingIndicator from "../components/projects/GitPullLoadingIndicator";
import {ROUTES} from "../constants/routes";

interface Params {
    fileId?: string,
}

export const Editor = () => {
    const params: Params = useParams();
    const fileId = Number(params.fileId);

    return <FullVersionFromFileProvider fileId={fileId}>
        <FileEditProvider>
            <GitPullLoadingIndicator>
                <Page initFileId={fileId}/>
            </GitPullLoadingIndicator>
        </FileEditProvider>
    </FullVersionFromFileProvider>
};

const Page  = ({initFileId}: {initFileId: number}) => {
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

    return (
        <Layout>
            <Sider/>
            <Layout style={{marginLeft: 200, height: '100vh', width: '100%'}}>
                <Header title={getFileName()}/>
                <Layout.Content>
                    <div style={{float: "left", width: "100%", height: "100%", padding: "10px"}}>
                        <iframe
                            title={"monaco-editor"}
                            src={`http://localhost:3001/`}
                            width={"100%"}
                            height={"100%"}
                            id={"editor-iframe"}
                            scrolling={"no"}
                            style={{border: "1px solid grey"}}
                            ref={(f: any) => {
                            }}
                        />
                    </div>
                    <div style={{float: "left", width: "30%", height: "100%", padding: "10px"}}>
                        <FileList onClickFile={editor.openFile}/>
                    </div>
                </Layout.Content>
            </Layout>
        </Layout>
    );
};