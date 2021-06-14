import {globalMessage} from "./globalMessage";
import {ValidatedFile} from "../../../rest_api/File";
import FileDownloadLink, {ZipDownloadLink} from "../dumb/FileDownloadLink";
import * as React from "react";
import {File} from "../../../model/types";

export const useVersionValidationMessage = (fullVersionTitle: string) => {
    const message = globalMessage(fullVersionTitle);

    const onSuccess = () => message.success("The project is valid");
    const onMergeConflict = (conflictFiles: File[]) => message.warning("There is a merge conflict in this project");
    const onFailWithLogs = (invalidFilesWithLogs: ValidatedFile[]) => {
        if (invalidFilesWithLogs.length > 0) {
            if (invalidFilesWithLogs.length == 1) {
                const file = invalidFilesWithLogs[0];
                message.error(<span>Some files are invalid. Click <FileDownloadLink file={{name: file.name+".log", content: file.log}}>here</FileDownloadLink> to download the log</span>);
            }
            else {
                const files = invalidFilesWithLogs.map(file => {return {name: file.name+".log", content: file.log}});
                message.error(<span>Some files are invalid. Click <ZipDownloadLink zipName={fullVersionTitle+".zip"} files={files}>here</ZipDownloadLink> to download the log</span>);
            }
        }
    };
    const onError = (error: Error) => message.error(error.message);

    return {
        onSuccess,
        onMergeConflict,
        onFailWithLogs,
        onError,
    }
};