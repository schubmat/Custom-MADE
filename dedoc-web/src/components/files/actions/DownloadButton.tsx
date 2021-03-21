import {globalMessage} from "../../../hooks/globalMessage";
import {FetchFileResponse} from "../../../services/http";
import {useFileResponsePromise} from "../../../hooks/useFileResponsePromise";
import * as React from "react";
import {useFileContext} from "../../../contexts/File";
import DownloadOptionsPopover from "../../projects/DownloadOptionsPopover";
import ActionButton from "../../common/ActionButton";
import {FileStatus} from "../../../model/types";

const DownloadButton = () => {
    const file = useFileContext();
    const message = globalMessage(`${file.name} download`);

    const onExportSuccess = (response: FetchFileResponse) => {
        if (!response.hasFile) {
            message.info(response.info);
            return;
        }
        response.startDownload();
        message.success("Download of exports has started");
    };
    const onExportFail = (response: FetchFileResponse) => {
        message.error(<span>The file has errors. {response.hasFile &&
        <span>Click <a onClick={() => response.startDownload()}>here</a> to download the log.</span>}</span>,)
    };

    const onRawSuccess = (response: FetchFileResponse) => {
        response.startDownload();
        message.success("Download of file has started");
    };
    const onRawFail = (response: FetchFileResponse) => {
        message.error("Unable to init download");
    };

    const fetchExport = () => {
        if (file.status === FileStatus.VALID)
            return () => file.further.getExport(file.id);
        else
            return () => file.validate(file.id).then(() => file.further.getExport(file.id));
    };

    const exportPromise = useFileResponsePromise(
        fetchExport(),
        onExportSuccess,
        onExportFail,
        error => message.error(error.message),
    );
    const rawPromise = useFileResponsePromise(
        () => file.further.getRaw(file.id),
        onRawSuccess,
        onRawFail,
        error => message.error(error.message),
    );

    const download = (downloadFiles: boolean, downloadExports: boolean) => {
        if (downloadFiles)
            rawPromise.start();
        if (downloadExports)
            exportPromise.start();
    };

    return <DownloadOptionsPopover startDownload={download}>
        <ActionButton icon="export"
                      style={{transform: "rotate(90deg)"}}
                      readyText={"export & download file"}
                      loadingText={exportPromise.isLoading ?
                          "waiting for server to export file..." :
                          "waiting for server to prepare download..."}
                      loading={exportPromise.isLoading || rawPromise.isLoading}/>
    </DownloadOptionsPopover>
};

export default DownloadButton;