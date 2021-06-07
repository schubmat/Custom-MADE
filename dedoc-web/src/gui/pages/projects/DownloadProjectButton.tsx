import {useProjectVersion} from "../../shared/contexts/ProjectVersion";
import {useProjects} from "../../shared/contexts/Projects";
import {globalMessage} from "../../shared/message/globalMessage";
import ActionButton from "../../shared/dumb/ActionButton";
import * as React from "react";
import {FetchFileResponse} from "../../../services/http";
import {useFileResponsePromise} from "../../shared/useFileResponsePromise";
import DownloadOptionsPopover from "../../shared/dumb/DownloadOptionsPopover";
import {FileStatus, File} from "../../../model/types";

const DownloadProjectButton = () => {
    const version = useProjectVersion();
    const projects = useProjects();
    const message = globalMessage(`${projects.getProjectTitle(version)} download`);

    const onExportSuccess = (response: FetchFileResponse) => {
        if (!response.hasFile) {
            message.info(response.info);
            return;
        }
        response.startDownload();
        message.success("Download of exports has started");
    };
    const onExportFail = (response: FetchFileResponse) => {
        message.error(<span>Some files have errors. {response.hasFile &&
        <span>Click <a onClick={() => response.startDownload()}>here</a> to download the log.</span>}</span>,)
    };

    const onRawSuccess = (response: FetchFileResponse) => {
        response.startDownload();
        message.success("Download of project has started");
    };
    const onRawFail = (response: FetchFileResponse) => {
        message.error("Unable to init download of project");
    };

    const fetchExport = () => {
        const versionEntity = version.getEntity();
        if (versionEntity.files) {
            const uncheckedFiles = versionEntity.files.filter(file => file.status === FileStatus.UNCHECKED);
            if (uncheckedFiles.length > 0)
                return () => version.validateFiles({id: version.id, files: uncheckedFiles.map(f=>f.id)}).then(() => version.further.getAllExports(version.id));
        }
        return () => version.further.getAllExports(version.id);
    };

    const exportPromise = useFileResponsePromise(
        fetchExport(),
        onExportSuccess,
        onExportFail,
        error => message.error(error.message),
    );
    const rawPromise = useFileResponsePromise(
        () => version.further.getAllRaws(version.id),
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
                      readyText={"export & download project"}
                      loadingText={exportPromise.isLoading ?
                          "waiting for server to export files..." :
                          "waiting for server to prepare zip..."}
                      loading={exportPromise.isLoading || rawPromise.isLoading}/>
    </DownloadOptionsPopover>
};

export default DownloadProjectButton;