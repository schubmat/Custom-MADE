import {globalMessage} from "../../../hooks/globalMessage";
import * as React from "react";
import ActionButton from "../../common/ActionButton";
import {useFileContext} from "../../../contexts/File";
import {ValidatedFile} from "../../../rest_api/File";
import {usePromise} from "../../../hooks/usePromise";
import {FileStatus} from "../../../model/types";
import FileDownloadLink from "../../common/FileDownloadLink";

const ValidationButton = () => {
    const file = useFileContext();
    const message = globalMessage(`${file.name} validation`);

    const onSuccess = (response: ValidatedFile) => {
        if (response.status === FileStatus.VALID)
            message.success("The file is valid");
        else if (response.status === FileStatus.IN_CONFLICT)
            message.warning("There is a merge conflict including this file");
        else if (response.log.length > 0) {
            message.error(<span>The file has errors.
                Click <FileDownloadLink file={{name: response.name+".log", content: response.log}}>here</FileDownloadLink> to download the log.</span>,)
        }
        else {
            message.error("The could not be validated and no log is available");
        }
    };

    const call = () => {
        return file.validate(file.id);
    };

    const promise = usePromise(
        call,
        onSuccess,
        error => message.error(error.message),
    );

    return <ActionButton icon="file-done"
                         readyText={"validate file"}
                         loadingText={"waiting for server to validate files.."}
                         loading={promise.isLoading}
                         onClick={promise.start}
    />
};

export default ValidationButton;