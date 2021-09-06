import {File, FileStatus} from "../../../model/types";
import {Button, Input, List, Modal} from "antd";
import React, {useState} from "react";
import {State} from "../../../state/stateEntity";
import {useFullVersion} from "../../shared/contexts/FullProjectVersion";
import {useFileEditContext} from "./FileEdit";
import {FileProvider} from "../../shared/contexts/File";
import SaveButton, {commentConflictOut} from "./SaveButton";
import {globalMessage} from "../../shared/message/globalMessage";
import {VersionFeedback} from "../../shared/message/versionFeedback";

const { Search } = Input;
const { confirm } = Modal;

export const FileList = ({onClickFile}: {onClickFile: (file: State<File>) => void}) => {
    const [searchString, setSearchString] = useState<string>("");
    const version = useFullVersion();
    const allFiles = version.orderFilesByName();
    const fileChanges = useFileEditContext();
    const conflictFiles = allFiles.filter((file: State<File>) => file.status === FileStatus.IN_CONFLICT);
    const message = globalMessage(`${version.getFullTitle()} editing`);

    const renderFileElement = (file: State<File>): React.ReactNode => {
        return <FileProvider value={file}>
            <List.Item>
                <table style={{width: "100%"}}><tr>
                    <td style={{textAlign: "left"}}>
                        <a onClick={() => onClickFile(file)}>{file.name.replace(/[_-]/g, " ")}</a>
                    </td>
                    <td style={{textAlign: "right"}}>
                        <SaveButton/>
                    </td>
                </tr></table>
            </List.Item>
        </FileProvider>
    };

    const onSaveAll = () => {
        const conflictFiles = fileChanges.unsavedFiles.filter(file => file.status === FileStatus.IN_CONFLICT);
        if (conflictFiles.length == 0) {
            saveAll();
            return;
        }
        confirm({
            title: "Do you really want to save and override the files being involved in the merge conflict?",
            content: <ul>{conflictFiles.map(file => <li>{file.name}</li>)}</ul>,
            onOk: () => saveAll(),
            onCancel() {}});
    };

    const saveAll = () => {
        fileChanges.saveLocalChanges(
            validatedVersion => VersionFeedback.onValidation(validatedVersion, version.getFullTitle(), message),
            error => message.error(error.message)
        );
    };

    const resolveAllMergeConflicts = () => {
        allFiles.forEach((file: State<File>) => fileChanges.setLocalChange(file.id, commentConflictOut(fileChanges.getLocalChange(file))));
    };

    const filteredFiles = allFiles.filter((file: State<File>) => {
        return file.name.toLowerCase().indexOf(searchString.toLowerCase()) >= 0;
    });

    const isPending: boolean = version.version !== null && version.version.files.items.filter(file => fileChanges.isPending(file.id)).length > 0;

    return (
        <div>
        <Search
            value={searchString}
            placeholder="input search text"
            onChange={(event) => setSearchString(event.target.value)}
        />
        <List
            size="small"
            bordered
            dataSource={filteredFiles.sort((a, b) => a.name < b.name ? -1 : 1)}
            renderItem={renderFileElement}
        />
            <table style={{width: "100%"}}><tr>
                <td style={{textAlign: "left"}}>
                    <Button disabled={fileChanges.unsavedFiles.length === 0 || isPending} type={"primary"} onClick={onSaveAll}>
                        {fileChanges.unsavedFiles.length <= 1 ? "Save" : "Save all"}
                    </Button>
                </td>
                <td style={{textAlign: "right"}}>
                    <Button disabled={conflictFiles.length === 0} type={"primary"} onClick={resolveAllMergeConflicts}>
                        Handle merge conflict
                    </Button>
                </td>
            </tr></table>
    </div>
    );
};