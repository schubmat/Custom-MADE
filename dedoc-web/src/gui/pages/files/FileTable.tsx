import * as React from "react";

import {Divider, Icon, Table} from "antd";
import {User} from "../../../services/users";
import {File, FileStatus} from "../../../model/types";
import {State} from "../../../state/stateEntity";
import {useHistory} from "react-router";
import {useFullVersion} from "../../shared/contexts/FullProjectVersion";
import {FileProvider} from "../../shared/contexts/File";
import ActionButton from "../../shared/dumb/ActionButton";
import ValidateFileButton from "./ValidateFileButton";
import DownloadFileButton from "./DownloadFileButton";
import {useSelectedFilesContext} from "./SelectedFilesContext";


const FileTable = () => {
    const {orderFilesByName, editFile, changeSelectedFiles} = useFileTable();

    const columns = () => {
        return [
            {
                title: "Name",
                dataIndex: "name",
                key: "name",
                render: (text: any, record: State<File>) => <a
                    onClick={() => editFile(record)}>{text.replace(/[_-]/g, " ")}</a>
            },
            {title: "Date of Creation", dataIndex: "createdAt", key: "createdAt",},
            {
                title: "Edited by", dataIndex: "editors", render: (text: any, record: State<File>) => {
                    return record.editorsAsUsers.items.map((user: User) => user.username).join(', ');
                }
            },
            {title: "Last edited", dataIndex: "lastEdited", key: "lastEdited",},
            {
                title: "Actions", dataIndex: "actions", render: (text: any, record: State<File>) => {
                    return <FileProvider value={record}>
                        <span onClick={event => event.stopPropagation()}>
                    <ActionButton readyText={"edit file"} loadingText={""} loading={false}
                                  icon={"edit"}
                                  onClick={() => editFile(record)}/>
                    <Divider type={"vertical"}/>
                    <ValidateFileButton/>
                    <Divider type={"vertical"}/>
                    <DownloadFileButton/>
                </span>
                    </FileProvider>
                }
            },
            {
                title: "Validity Status", dataIndex: "status", render: (text: any, record: any) => {
                    if (record.status === FileStatus.VALID)
                        return <Icon type="check"/>;
                    if (record.status === FileStatus.INVALID)
                    // return <Icon type="exclamation" />
                        return <Icon type="close"/>;
                    if (record.status === FileStatus.IN_CONFLICT)
                        return <Icon type="file-exclamation"/>
                    return <Icon type="question"/>;
                }
            }
        ]
    };

    return <Table<State<File>>
        rowSelection={{onChange: changeSelectedFiles}}
        columns={columns()}
        dataSource={orderFilesByName()}
        onRow={undefined}
        size={"small"}
        rowKey={(record: State<File>) => record.id.toString()}
    />
};

const useFileTable = () => {
    const history = useHistory();
    const {orderFilesByName} = useFullVersion();
    const [_, setSelectedFiles] = useSelectedFilesContext();

    const editFile = (file: State<File>) => {
        history.push(`/editor/${file.id}`);
    };

    const onSelectionChange = (selectedKeys: string[] | number[], selectedFiles: State<File>[]) => {
        setSelectedFiles(selectedFiles);
    };

    return {
        orderFilesByName,
        editFile,
        changeSelectedFiles: onSelectionChange,
    }
};

export default FileTable;