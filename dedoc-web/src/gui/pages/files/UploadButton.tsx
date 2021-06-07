import {FooterIconButton} from "../../shared/layout/footer/FooterIconButton";
import {Upload} from "antd";
import * as React from "react";
import {useState} from "react";
import {useFullVersion} from "../../shared/contexts/FullProjectVersion";
import {RcFile} from "antd/lib/upload";
import {File, FileStatus, Version} from "../../../model/types";
import {ValidatedVersion} from "../../../rest_api/Version";
import {useVersionValidationMessage} from "../../shared/message/useVersionValidationMessage";
import {ValidatedFile} from "../../../rest_api/File";

export const UploadButton = () => {
    const {fullVersionTitle, fileExtension, isUploading, beforeUpload, uploadFiles} = useUpload();
    const validationMessage = useVersionValidationMessage(fullVersionTitle);

    const handleUpload = () => {
        uploadFiles(
            validationMessage.onSuccess,
            validationMessage.onMergeConflict,
            validationMessage.onFailWithLogs,
            validationMessage.onError
        );
    };

    return <Upload name={"files"}
                   accept={fileExtension}
                   showUploadList={false}
                   multiple={true}
                   beforeUpload={beforeUpload}
                   customRequest={handleUpload}>
        <FooterIconButton type={"upload"} readyText={"upload files"} loadingText={"validating files..."} loading={isUploading} onClick={() => {}}/>
    </Upload>;
};

const useUpload = () => {
    const [uploadList, setUploadList] = useState<RcFile[]>([]);
    const [isUploading, setUploading] = useState<boolean>(false);
    const {version, isLoading, error, getFullTitle} = useFullVersion();

    const beforeUpload = (file: RcFile, files: RcFile[]): boolean => {
        setUploadList(files);
        return true;
    };

    const uploadFiles = (onSuccess: () => void,
                         onMergeConflict: (conflictFiles: File[]) => void,
                         onFailWithLogs: (invalidFilesWithLogs: ValidatedFile[]) => void,
                         onError: (error: Error) => void) => {
        if (!version || isUploading)
            return;
        setUploading(true);
        return version.uploadFiles({id: version.id, files: uploadList}).then((updatedVersion: Required<Version>) => {
            const newFiles = updatedVersion.files.filter(updatedFile => version.files.items.filter(oldFile => oldFile.id == updatedFile.id).length == 0);
            if (newFiles.length == 0) {
                setUploading(false);
                return;
            }
            version.validateFiles({id: version.id, files: newFiles.map(f=>f.id)}).then((validatedVersion: ValidatedVersion) => {
                if (validatedVersion.valid)
                    return onSuccess();
                const conflictFiles = validatedVersion.files.filter(file => file.status === FileStatus.IN_CONFLICT);
                if (conflictFiles.length > 0)
                    return onMergeConflict(conflictFiles);
                const invalidFilesWithLogs = validatedVersion.files.filter(file => file.status === FileStatus.INVALID && file.log.length > 0);
                if (invalidFilesWithLogs.length > 0)
                    return onFailWithLogs(invalidFilesWithLogs);
            }).catch(onError).finally(() => setUploading(false));
        }).catch((error: Error) => {
            setUploading(false);
            onError(error);
        });
    };

    return {
        fullVersionTitle: getFullTitle(),
        fileExtension: version ? `.${version.fileExtension}` : "",
        isUploading,
        beforeUpload,
        uploadFiles,
    };
};