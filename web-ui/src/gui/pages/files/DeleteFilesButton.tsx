import {useSelectedFilesContext} from "./SelectedFilesContext";
import {FooterIconButton} from "../../shared/layout/footer/FooterIconButton";
import * as React from "react";
import {useState} from "react";
import {Modal} from "antd";
import {File, FileStatus} from "../../../model/types";
import {globalMessage} from "../../shared/message/globalMessage";
import {useFullVersion} from "../../shared/contexts/FullProjectVersion";

const { confirm } = Modal;

export const DeleteFilesButton = () => {

    const {getFullVersionTitle, selectedFiles, deleteFiles, isLoading} = useDeleteFiles();
    const message = globalMessage(`Deleting files in ${getFullVersionTitle()}`);

    const onDeleteFiles = () => {
        if (selectedFiles.length == 0)
            return;
        confirm({
            title: "Do you really want to delete the following files?",
            content: <ul>{selectedFiles.map(file => <li>{file.name}</li>)}</ul>,
            onOk: () => deleteFiles(
                file => message.info(`There is a merge conflict on ${file.name}`),
                file => message.error(`Unable to delete ${file.name}`),
                error => message.error(error.message)),
            onCancel() {}});
    };

    return <FooterIconButton type={"delete"}
                             readyText={"delete selected files"}
                             loading={isLoading}
                             onClick={onDeleteFiles}/>;
};

const useDeleteFiles = () => {
    const {version, getFullTitle} = useFullVersion();
    const [selectedFiles, setSelectedFiles] = useSelectedFilesContext();
    const [isLoading, setLoading] = useState<boolean>(false);

    const deleteFiles = (onMergeConflict: (file: File) => void,
                         onFileError: (file: File) => void,
                         onError: (error: Error) => void) => {
        if (!version || isLoading || setSelectedFiles.length == 0)
            return;
        const dto = selectedFiles.map(f => {return {id: f.id}});
        setLoading(true);
        version.deleteFiles({versionId: version.id, files: dto}).then(newVersion => {
            const newSelectedFiles = selectedFiles.filter(file => newVersion.files.find(f => f.id == file.id));
            setSelectedFiles(newSelectedFiles);
            selectedFiles.forEach(deletedFile => {
                const undeleted = newVersion.files.find(f => f.id == deletedFile.id);
                if (undeleted) {
                    if (undeleted.status == FileStatus.IN_CONFLICT)
                        onMergeConflict(undeleted);
                    else
                        onFileError(undeleted);
                }
            });
        }).catch(onError).finally(() => setLoading(false));
    };

    return {
        version,
        getFullVersionTitle: getFullTitle,
        selectedFiles,
        deleteFiles,
        isLoading,
    }
};