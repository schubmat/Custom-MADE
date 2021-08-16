import {ValidatedVersion} from "../../../rest_api/Version";
import {GlobalMessage} from "./globalMessage";
import {FileStatus} from "../../../model/types";
import FileDownloadLink, {ZipDownloadLink} from "../dumb/FileDownloadLink";
import * as React from "react";

export const VersionFeedback = {

    onValidation: (validatedVersion: ValidatedVersion, projectName: string, message: GlobalMessage) => {
        if (validatedVersion.valid) {
            message.success("The project is valid");
            return;
        }
        if (validatedVersion.files.filter(file => file.status === FileStatus.IN_CONFLICT).length > 0) {
            message.warning("There is a merge conflict in this project");
        }
        const invalidFilesWithLogs = validatedVersion.files.filter(file => file.status === FileStatus.INVALID && file.log.length > 0);
        if (invalidFilesWithLogs.length > 0) {
            if (invalidFilesWithLogs.length == 1) {
                const file = invalidFilesWithLogs[0];
                message.error(<span>Some files are invalid. Click <FileDownloadLink file={{name: file.name+".log", content: file.log}}>here</FileDownloadLink> to download the log</span>);
            }
            else {
                const files = invalidFilesWithLogs.map(file => {return {name: file.name+".log", content: file.log}});
                message.error(<span>Some files are invalid. Click <ZipDownloadLink zipName={projectName+".zip"} files={files}>here</ZipDownloadLink> to download the log</span>);
            }
        }
    },
};