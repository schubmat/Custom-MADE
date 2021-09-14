import {FooterIconButton} from "../../shared/layout/footer/FooterIconButton";
import * as React from "react";
import {useState} from "react";
import {FetchFileResponse} from "../../../services/http";
import {useSelectedFilesContext} from "./SelectedFilesContext";
import {useFullVersion} from "../../shared/contexts/FullProjectVersion";
import {globalMessage} from "../../shared/message/globalMessage";

export const FetchExportsButton = () => {

    const {fullVersionTitle, isLoading, fetchExports} = useGetExports();
    const message = globalMessage(`${fullVersionTitle} exports`);

    const onGetExports = () => {
        fetchExports(
            downloadExports => message.success(
                <span>Export successful. Click <a onClick={() => downloadExports()}>here</a> to start the download.</span>),
            downloadLog => message.error(
                <span>Export failed. Click <a onClick={() => downloadLog}>here</a> to download the log.</span>),
            info => message.info(info),
            error => message.error(error.message)
        );
    };


    return <FooterIconButton type={"save"}
                             readyText={"download exports"}
                             loadingText={"preparing exports..."}
                             loading={isLoading}
                             onClick={onGetExports}/>
};

const useGetExports = () => {
    const {version, error, getFullTitle} = useFullVersion();
    const [selectedFiles, setSelectedFiles] = useSelectedFilesContext();
    const [isLoading, setLoading] = useState<boolean>(false);

    const fetchExports = (onSuccess: (downloadExports: () => void) => void,
                          onFail: (downloadLog: () => void) => void,
                          onElse: (info: string) => void,
                          onError: (error: Error) => void) => {
        if (!version || isLoading || selectedFiles.length == 0)
            return;
        setLoading(true);
        version.further.getExports(version.id, selectedFiles.map(f => f.id)).then((result : FetchFileResponse) => {
            if (result.wasSuccessful && result.hasFile)
                onSuccess(result.startDownload);
            else if (result.hasFile)
                onFail(result.startDownload);
            else
                onElse(result.info);
        }).catch(onError).finally(() => setLoading(false));
    };

    return {
        fullVersionTitle: getFullTitle(),
        selectedFiles,
        isLoading,
        fetchExports,
    }
};