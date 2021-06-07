import {globalMessage} from "../../shared/message/globalMessage";
import * as React from "react";
import ActionButton from "../../shared/dumb/ActionButton";
import {useFileContext} from "../../shared/contexts/File";
import {ValidatedFile} from "../../../rest_api/File";
import {usePromise} from "../../shared/usePromise";
import {FileStatus} from "../../../model/types";
import FileDownloadLink from "../../shared/dumb/FileDownloadLink";

const ValidateFileButton = () => {
    const onErrorLog = (response: ValidatedFile) => {
        message.error(<span>The file has errors.
                Click <FileDownloadLink file={{name: response.name+".log", content: response.log}}>here</FileDownloadLink> to download the log.</span>,)
    };

    const {fileName, validateFile, isValidationLoading} = useFileValidation(
        () => message.success("The file is valid"),
        () => message.warning("There is a merge conflict including this file"),
        onErrorLog,
        () => message.error("The could not be validated and no log is available"),
        error => message.error(error.message));
    const message = globalMessage(`${fileName} validation`);


    return <ActionButton icon="file-done"
                         readyText={"validate file"}
                         loadingText={"waiting for server to validate files.."}
                         loading={isValidationLoading}
                         onClick={validateFile}
    />
};

const useFileValidation = (onSuccess: () => void,
                           onMergeConflict: () => void,
                           onLogAvailable: (file: ValidatedFile) => void,
                           onNoLog: () => void,
                           onError: (error: Error) => void) => {
    const file = useFileContext();

    const onOk = (response: ValidatedFile) => {
        if (response.status === FileStatus.VALID)
            onSuccess();
        else if (response.status === FileStatus.IN_CONFLICT)
            onMergeConflict();
        else if (response.log.length > 0)
            onLogAvailable(response);
        else
            onNoLog();
    };

    const call = () => {
        return file.validate(file.id);
    };

    const promise = usePromise(
        call,
        onOk,
        onError,
    );

    return {
        fileName: file.name,
        validateFile: promise.start,
        isValidationLoading: promise.isLoading
    }
};

export default ValidateFileButton;