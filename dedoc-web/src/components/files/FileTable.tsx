import * as React from "react";

import {Divider, Icon, Table} from "antd";
import {User} from "../../services/users";
import {File, FileStatus} from "../../model/types";
import {State} from "../../model/stateEntity";
import {useHistory} from "react-router";
import {useFullVersion} from "../../contexts/FullProjectVersion";
import {FileProvider} from "../../contexts/File";
import ActionButton from "../common/ActionButton";
import ValidationButton from "./actions/ValidationButton";
import DownloadButton from "./actions/DownloadButton";


const FileTable = (props: { onSelectionChange: (selectedFiles: State<File>[]) => void }) => {
    const history = useHistory();
    const {orderFilesByName} = useFullVersion();

    const onEditFile = (file: State<File>) => {
        history.push(`/editor/${file.id}`);
    };

    const onSelectionChange = (selectedKeys: string[] | number[], selectedFiles: State<File>[]) => {
        props.onSelectionChange(selectedFiles);
    };

    const columns = (onEditFile: (file: State<File>) => void) => {
        return [
            {
                title: "Name",
                dataIndex: "name",
                key: "name",
                render: (text: any, record: State<File>) => <a
                    onClick={() => onEditFile(record)}>{text.replace(/[_-]/g, " ")}</a>
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
                                  onClick={() => onEditFile(record)}/>
                    <Divider type={"vertical"}/>
                    <ValidationButton/>
                    <Divider type={"vertical"}/>
                    <DownloadButton/>
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
        rowSelection={{onChange: onSelectionChange}}
        columns={columns(onEditFile)}
        dataSource={orderFilesByName()}
        onRow={undefined}
        size={"small"}
        rowKey={(record: State<File>) => record.id.toString()}
    />
};

export default FileTable;