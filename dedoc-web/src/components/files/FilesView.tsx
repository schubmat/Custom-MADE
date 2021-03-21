import * as React from "react";
import {useEffect, useState} from "react";
import {File, FileStatus, ProjectLevel, Version} from "../../model/types";
import TableOptionDisabled from "../../assets/table_disabled.png";
import TableOptionEnabled from "../../assets/table_enabled.png";
import GridOptionEnabled from "../../assets/grid_enabled.png";
import GridOptionDisabled from "../../assets/grid_disabled.png";
import {Divider, Layout, message, Modal, notification, Popover} from "antd";
import Footer from "../navigation/Footer";
import ImageButton from "../common/ImageButton";
import Sider from "../navigation/Sider";
import FileForm from "./FileForm";
import {RcFile} from "antd/lib/upload";
import Header from "../navigation/Header";
import {State} from "../../model/stateEntity";
import {FetchFileResponse} from "../../services/http";
import {useFullVersion} from "../../contexts/FullProjectVersion";
import FileTable from "./FileTable";
import {ValidatedVersion} from "../../rest_api/Version";
import {VersionFeedback} from "../../feedback/versionFeedback";
import {globalMessage} from "../../hooks/globalMessage";

const { confirm } = Modal;

export const FilesView = () => {
    const [layout, setLayout] = useState<"grid" | "table">("table");
    const [selectedFiles, setSelectedFiles] = useState<State<File>[]>([]);
    const [isCreateFileVisible, setCreateFileVisible] = useState<boolean>(false);
    const {version, isLoading, error, getFullTitle} = useFullVersion();

    useEffect(() => {
        if (error)
            message.error(error.message);
    }, [error]);

    const onSelectionChange = (newSelectedFiles: State<File>[]) => {
        setSelectedFiles(newSelectedFiles);
    };

    const toggleCreateFileForm = () => {
        setCreateFileVisible(!isCreateFileVisible);
    };

    const onGetExports = () => {
        if (!version)
            return;
        const isM0 = version.project.level.toString() === ProjectLevel[ProjectLevel.M0];
        if (!isM0)
            return;
        if (selectedFiles.length == 0) {
            message.info("No files are selected");
            return;
        }
        fetchExports(selectedFiles);
    };

    const fetchExports = (selectedFiles: State<File>[]) => {
        if (!version)
            return;
        const hide = message.loading("Waiting for server to export files...", 0);
        version.further.getExports(version.id, selectedFiles.map(f => f.id)).then((result : FetchFileResponse) => {
            hide();
            if (result.wasSuccessful && result.hasFile) {
                message.success(
                    <span>Export successful. Click <a onClick={() => result.startDownload()}>here</a> to start the download.</span>);
            } else if (result.hasFile) {
                message.error(
                    <span>Export failed. Click <a onClick={() => result.startDownload()}>here</a> to download the log.</span>
                )
            }
            else {
                message.info(result.info)
            }
        }).catch((error: Error) => {
            hide();
            message.error(error.message)
        });
    };

    const uploadFiles = (uploadList: RcFile[]) => {
        if (!version)
            return Promise.reject();
        const hide = message.loading("Waiting for server to validate file(s)...", 0);
        const responseMessage = globalMessage(getFullTitle());
        return version.uploadFiles({id: version.id, files: uploadList}).then((updatedVersion: Required<Version>) => {
            const newFiles = updatedVersion.files.filter(updatedFile => version.files.items.filter(oldFile => oldFile.id == updatedFile.id).length == 0);
            if (newFiles.length == 0) {
                hide();
                return;
            }
            version.validateFiles({id: version.id, files: newFiles.map(f=>f.id)}).then((validatedVersion: ValidatedVersion) => {
                hide();
                VersionFeedback.onValidation(validatedVersion, getFullTitle(), responseMessage);
            });
        }).catch((error: Error) => {
            message.error(error.message);
            hide();
        });
    };

    const onDeleteFiles = () => {
        if (selectedFiles.length == 0) {
            message.info("No files are selected");
            return;
        }
        confirm({
            title: "Do you really want to delete the following files?",
            content: <ul>{selectedFiles.map(file => <li>{file.name}</li>)}</ul>,
            onOk: () => deleteFiles(selectedFiles),
            onCancel() {}});
    };

    const deleteFiles = (selectedFiles: State<File>[]) => {
        if (!version)
            return;
        const message = globalMessage(`Deleting files in ${getFullTitle()}`);
        version.deleteFiles({versionId: version.id, files: selectedFiles.map(f => {return {id: f.id}})}).then(newVersion => {
            const newSelectedFiles = selectedFiles.filter(file => newVersion.files.find(f => f.id == file.id));
            setSelectedFiles(newSelectedFiles);
            selectedFiles.forEach(deletedFile => {
                const undeleted = newVersion.files.find(f => f.id == deletedFile.id);
                if (undeleted) {
                    if (undeleted.status == FileStatus.IN_CONFLICT) {
                        message.info(`There is a merge conflict on ${undeleted.name}`);
                    }
                    else {
                        message.error(`Unable to delete ${undeleted.name}`);
                    }
                }
            });
        }).catch((error: Error) => {
            message.error(error.message);
        });
    };

    const renderDataLayout = (): React.ReactNode => {
        if (!version)
            return null;

        return layout === "table" ?
            <FileTable
                onSelectionChange={onSelectionChange}
                /> :
            <span/>
        // <FileGrid
        //     selection={selection}
        //     elements={version.doc.files}/>;
    };

    const renderFooter = (): React.ReactNode => {
        if (!version) {
            return <Footer/>
        }
        return <Footer
            addIcon={toggleCreateFileForm}
            saveIcon={onGetExports}
            garbageIcon={onDeleteFiles}
            uploadIcon={{
                accept: `.${version.fileExtension}`,
                onUpload: uploadFiles
            }}
        />
    };


    const renderTableOption = (): React.ReactNode => {
        return layout === "table" ?
            <ImageButton src={TableOptionDisabled} alt={"table layout"}/> :
            <ImageButton src={TableOptionEnabled} alt={"table layout"} onClick={() => {
                setLayout("table");
            }}/>
    };

    const renderGridOption = (): React.ReactNode => {
        return layout === "table" ?
            <ImageButton src={GridOptionEnabled} alt={"grid layout"} onClick={() => {
                setLayout("grid");
            }}/> :
            <ImageButton src={GridOptionDisabled} alt={"grid layout"}/>
    };

    return (
        <Layout>
            <Sider/>
            <Layout style={{marginLeft: 200, height: '100vh', width: '100%'}}>
                <Header title={version ? version.project.name : ""}/>
                <Layout.Content>
                    <div style={{margin: '12px 8px'}}>
                        {renderTableOption()}
                        <Divider type={"vertical"}/>
                        {renderGridOption()}
                    </div>
                    {renderDataLayout()}
                </Layout.Content>
                {version && <Popover
                    content={<FileForm version={version} />}
                    trigger={"click"}
                    visible={isCreateFileVisible}
                    onVisibleChange={setCreateFileVisible}
                >
                    {renderFooter()}
                </Popover>}
            </Layout>
        </Layout>
    );
};