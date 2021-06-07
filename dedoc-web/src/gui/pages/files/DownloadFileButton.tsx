import {globalMessage} from "../../shared/message/globalMessage";
import {FetchFileResponse} from "../../../services/http";
import {useFileResponsePromise} from "../../shared/useFileResponsePromise";
import * as React from "react";
import {useFileContext} from "../../shared/contexts/File";
import DownloadOptionsPopover from "../../shared/dumb/DownloadOptionsPopover";
import ActionButton from "../../shared/dumb/ActionButton";
import {FileStatus} from "../../../model/types";

const DownloadFileButton = () => {

    const {fileName, fetchRaws, isRawDownloadLoading} = useRawDownload(
        response => response.startDownload(),
        response => message.error("Unable to init download"),
        error => message.error(error.message));
    const message = globalMessage(`${fileName} download`);

    const onExportSuccess = (response: FetchFileResponse) => {
        if (!response.hasFile) {
            message.info(response.info);
            return;
        }
        response.startDownload();
    };

    const onExportFail = (response: FetchFileResponse) => {
        message.error(<span>The file has errors. {response.hasFile &&
        <span>Click <a onClick={() => response.startDownload()}>here</a> to download the log.</span>}</span>,)
    };

    const {fetchExports, isExportDownloadLoading} = useExportDownload(
        onExportSuccess,
        onExportFail,
        error => message.error(error.message));

    const download = (downloadFiles: boolean, downloadExports: boolean) => {
        if (downloadFiles)
            fetchRaws();
        if (downloadExports)
            fetchExports();
    };


    return <DownloadOptionsPopover startDownload={download}>
        <ActionButton icon="export"
                      style={{transform: "rotate(90deg)"}}
                      readyText={"export & download file"}
                      loadingText={isExportDownloadLoading ?
                          "waiting for server to export file..." :
                          "waiting for server to prepare download..."}
                      loading={isExportDownloadLoading || isRawDownloadLoading}/>
    </DownloadOptionsPopover>
};


const useRawDownload = (onSuccess: (response: FetchFileResponse) => void,
                        onFail: (response: FetchFileResponse) => void,
                        onError: (error: Error) => void) => {
    const file = useFileContext();
    const rawPromise = useFileResponsePromise(
        () => file.further.getRaw(file.id),
        onSuccess,
        onFail,
        onError);

    return {
        fileName: file.name,
        fetchRaws: rawPromise.start,
        isRawDownloadLoading: rawPromise.isLoading,
    }
};

const useExportDownload = (onSuccess: (response: FetchFileResponse) => void,
                        onFail: (response: FetchFileResponse) => void,
                        onError: (error: Error) => void) => {
    const file = useFileContext();

    const fetchExport = () => {
        if (file.status === FileStatus.VALID)
            return () => file.further.getExport(file.id);
        else
            return () => file.validate(file.id).then(() => file.further.getExport(file.id));
    };

    const exportPromise = useFileResponsePromise(
        fetchExport(),
        onSuccess,
        onFail,
        onError,
    );

    return {
        fileName: file.name,
        fetchExports: exportPromise.start,
        isExportDownloadLoading: exportPromise.isLoading,
    }
};

export default DownloadFileButton;