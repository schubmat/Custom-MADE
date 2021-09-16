import * as React from "react";
import {useEffect, useState} from "react";
import {Icon, Table} from "antd";
import {ExpandIconProps} from "antd/lib/table";
import {Project} from "../../../model/types";
import VersionTableExtension from "./VersionTableExtension";
import {State} from "../../../state/stateEntity";
import {useModels} from "../../shared/contexts/Projects";
import {ProjectProvider} from "./Project";
import {AddVersionButton} from "./AddVersionButton";

const projectColumns = (
    renderAddVersion: (record: State<Project>) => React.ReactNode,
    renderExpandAllIcon: () => React.ReactNode) => {
    return [
        {
            title: renderExpandAllIcon(), dataIndex: "actions", render: (text: any, record: State<Project>) => {
                return null;
            }
        },
        {title: "Name", dataIndex: "name", key: "name",},
        {title: "Description", dataIndex: "description", key: "description",},
        {
            title: "Actions", dataIndex: "actions", render: (text: any, record: any) => {
                return renderAddVersion(record);
            }
        },
    ]
};


const M1ProjectTable = () => {

    const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([]);
    const [isInitialized, setInitalized] = useState<boolean>(false);
    const models = useModels();

    useEffect(() => {
        if (!isInitialized && models.raw.items.length > 0) {
            expandAll();
            setInitalized(true);
        }
    });

    const onRow = (record: State<Project>, index: number) => {
        return {
            onClick: () => {
                const isExpanded = expandedRowKeys.find((entry: string, id: number) => {
                    return entry === record.id.toString();
                });
                onRowExpand(isExpanded === undefined, record);
            }
        }
    };

    const expandedRowRender = (record: State<Project>): React.ReactNode => {
        return <ProjectProvider value={record}>
            <VersionTableExtension/>
        </ProjectProvider>
    };

    const renderAddVersionPopover = (record: State<Project>): React.ReactNode => {
        return <ProjectProvider value={record}>
            <span onClick={(event: any) => {
                event.stopPropagation()
            }}>
                <AddVersionButton/>
            </span>
        </ProjectProvider>
    };

    const onRowExpand = (expanded: boolean, record: State<Project>) => {
        if (record.versions.items.length === 0)
            return;
        let newExpandedRowKeys = [...expandedRowKeys];
        if (expanded)
            newExpandedRowKeys.push(record.id.toString());
        else {
            const collapsedId = record.id.toString();
            newExpandedRowKeys = newExpandedRowKeys.filter((id: string) => id !== collapsedId);
        }
        setExpandedRowKeys(newExpandedRowKeys);
    };

    const renderExpandIcon = (props: ExpandIconProps<State<Project>>) => {
        if (props.record.versions.items.length === 0) {
            return null;
        }
        if (props.expanded) {
            return <a><Icon type="minus" onClick={e => {
                props.onExpand(props.record, e);
            }}/></a>
        } else {
            return <a><Icon type="plus" onClick={e => {
                props.onExpand(props.record, e);
            }}/></a>
        }
    };

    const renderExpandAllIcon = () => {
        if (expandedRowKeys.length === 0)
            return <a>
                <Icon type="plus" onClick={expandAll}/>
            </a>;
        return <a>
            <Icon type="minus" onClick={collapseAll}/>
        </a>;
    };

    const expandAll = () => {
        const newExpandedRowKeys = models.raw.items
            .filter((record: State<Project>) => record.versions.items.length > 0)
            .map((record: State<Project>) => record.id.toString());
        setExpandedRowKeys(newExpandedRowKeys);
    };

    const collapseAll = () => {
        setExpandedRowKeys([]);
    };

    return <Table<State<Project>>
        columns={projectColumns(renderAddVersionPopover, renderExpandAllIcon)}
        dataSource={models.orderProjectsByName()}
        expandedRowRender={expandedRowRender}
        expandedRowKeys={expandedRowKeys}
        onExpand={onRowExpand}
        expandIconAsCell={false}
        expandIcon={renderExpandIcon}
        rowKey={(record: State<Project>) => record.id.toString()}
        onRow={onRow}
        size={"small"}
    />;
};

export default M1ProjectTable;