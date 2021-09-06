import {useFileContext} from "../../shared/contexts/File";
import {globalMessage} from "../../shared/message/globalMessage";
import React from "react";
import {useFileEditContext} from "./FileEdit";
import ActionButton from "../../shared/dumb/ActionButton";
import {FileStatus} from "../../../model/types";
import FileDownloadLink from "../../shared/dumb/FileDownloadLink";
import {Icon} from "antd";
import {usePromise} from "../../shared/usePromise";
import {useFullVersion} from "../../shared/contexts/FullProjectVersion";

const SaveButton = () => {
    const {version} = useFullVersion();
    const file = useFileContext();
    const fileChanges = useFileEditContext();
    const fileContent = fileChanges.getLocalChange(file);
    const isPending = fileChanges.isPending(file.id);
    const message = globalMessage(`${file.name} saving`);
    const deleteFilePromise = usePromise(
        () => deleteFile(),
        () => {},
        (error: Error) => message.error(error.message),
    );

    const handleConflict = () => {
        fileChanges.setLocalChange(file.id, commentConflictOut(fileContent));
    };

    const deleteFile = () => {
        if (version && file)
            return version.deleteFiles({versionId: version.id, files: [{id: file.id}]});
        return Promise.reject();
    };

    if (!isPending && file.status === FileStatus.IN_CONFLICT)
        return <span>
            <ActionButton
                icon="delete"
                disabled={false}
                readyText={"Delete file"}
                loadingText={"Deleting the file..."}
                loading={deleteFilePromise.isLoading}
                onClick={deleteFilePromise.start}/>
            <ActionButton
                icon="exclamation"
                disabled={false}
                readyText={"Comment out conflict parts"}
                loadingText={""}
                loading={false}
                onClick={handleConflict}/>
        </span>;
    let icon;
    if (isPending)
        icon = "loading";
    else if (fileContent != file.content)
        icon = "question";
    else if (file.status === FileStatus.VALID)
        icon = "check";
    else if (file.status == FileStatus.INVALID)
        icon = "close";
    else
        icon = "question";
    return <span>{fileContent != file.content && <span><Icon type={"edit"}/>&nbsp;</span>}<Icon type={icon}/></span>
};

export const onFileSaveSuccess = () => "File was saved without errors";
export const onFileValidationFail = (fileName: string, log: string) => <span>
    File was saved but contains errors. Click
    <FileDownloadLink file={{name: fileName+".log", content: log}}>
        here
    </FileDownloadLink> to download the log.
</span>;
export const onMergeConflict = () => "Unable to merge file with remote changes. You need to merge manually.";
export const onFileSaveError = (error: Error) => error.message;

export const commentConflictOut = (fileContent: string) => {
    const lines = fileContent.split("\n");
    let isConflict = false;
    for (let i = 0; i < lines.length; ++i) {
        if (lines[i].startsWith("<<<<<<<"))
            isConflict = true;
        if (isConflict)
            lines[i] = "//" + lines[i];
        if (lines[i].startsWith("//>>>>>>>"))
            isConflict = false;
    }
    return lines.join("\n");
};

export default SaveButton;