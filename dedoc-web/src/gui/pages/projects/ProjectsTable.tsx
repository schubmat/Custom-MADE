import {State} from "../../../state/stateEntity";
import {Version} from "../../../model/types";
import {Button, Divider, Icon, Modal, Table, Tooltip} from "antd";
import * as React from "react";
import {useState} from "react";
import {ROUTES} from "../../../constants/routes";
import {ProjectVersionProvider} from "../../shared/contexts/ProjectVersion";
import {EditGitConnectionProvider, useEditGitConnection} from "./edit_gitconfig/EditGitConnectionContext";
import {useSelectedProjectsContext} from "./SelectedProjectsContext";
import {useProjects} from "../../shared/contexts/Projects";
import {useHistory} from "react-router";
import ValidateProjectButton from "./ValidateProjectButton";
import DownloadProjectButton from "./DownloadProjectButton";
import GenericModal from "../../shared/dumb/GenericModal";
import GitConnectionView from "./edit_gitconfig";
import ProjectSettings from "./settings";
import {ColumnProps} from "antd/lib/table";

export const ProjectsTable = () => {
    const projects = useProjects();
    const history = useHistory();
    const [_, setSelectedVersions] = useSelectedProjectsContext();


    const rowSelection = {
        onChange: (selectedRowKeys: number[] | string[], newSelectedVersions: State<Version>[]) => {
            setSelectedVersions(newSelectedVersions)
        },
    };

    const onRow = (record: State<Version>) => {
        return {
            onClick: () => {
                history.push(`${ROUTES.VERSIONS}/${record.id}`);
            },
        };
    };

    const versionColumns = (): ColumnProps<State<Version>>[] => [
        {
            title: "Name", dataIndex: "version", render: (text: any, record: State<Version>) => {
                return <span>{projects.getProjectTitle(record)}</span>
            }
        },
        {title: "Description", dataIndex: "description", key: "project.description",},
        {title: "Extension", dataIndex: "fileExtension", key: "fileExtension",},
        {
            title: "Validity Status",
            align: "center",
            dataIndex: "status",
            render: (text: any, record: State<Version>) => {
                if (record.valid)
                    return <Icon type="check"/>;
                return <Icon type="close"/>
            }
        },
        {
            title: "Actions",
            key: "actions",
            render: (record: State<Version>) => {
                return <ProjectVersionProvider value={record}>
                    <span onClick={event => event.stopPropagation()}>
                        <ValidateProjectButton/>
                        <Divider type={"vertical"}/>
                        <DownloadProjectButton/>
                        <Divider type={"vertical"}/>
                        {record.usersPermissions.canSetGitRepo && <EditGitConnectionProvider>
                            <GitConnectionFormWrapper record={record}/>
                            <Divider type={"vertical"}/>
                        </EditGitConnectionProvider>}
                        <GenericModal width={1000} title={projects.getProjectTitle(record)}
                                      content={<ProjectSettings/>}>
                            <Tooltip title={"settings"}><Button icon="setting" className={"action-button"}/></Tooltip>
                        </GenericModal>
                    </span>
                </ProjectVersionProvider>
            }
        }
    ];

    return <Table<State<Version>> columns={versionColumns()}
                                  dataSource={projects.orderVersionsByTitle()}
                                  rowKey={(record: State<Version>) => record.id.toString()}
                                  rowSelection={rowSelection}
                                  onRow={onRow}
                                  size={"small"}
    />
};

const GitConnectionFormWrapper = ({record}: { record: State<Version> }) => {
    const [isGitConfigVisible, setGitConfigVisible] = useState<boolean>(false);
    const projects = useProjects();
    const gitConnection = useEditGitConnection();

    const openGitConfig = (record: State<Version>) => {
        gitConnection.resetFields();
        gitConnection.branch.setBranch("");
        gitConnection.dir.setDir("");
        setGitConfigVisible(true);
    };

    const closeGitConfig = () => {
        setGitConfigVisible(false);
    };

    const hasActiveGitSync = record.gitConfiguration;
    const gitSyncTip = hasActiveGitSync ? "sync git (currently active)" : "sync git (currently inactive)";

    return <span>
        <Tooltip title={gitSyncTip}><Button
            onClick={() => openGitConfig(record)} icon="file-sync"
            className={"action-button " + (hasActiveGitSync ? "activated-settings" : "non-activated-settings")}/></Tooltip>
        <Modal title={projects.getProjectTitle(record)}
               visible={isGitConfigVisible}
               onCancel={closeGitConfig}
               footer={[]}>
        <GitConnectionView onSubmit={closeGitConfig}/>
        </Modal>
    </span>;
};