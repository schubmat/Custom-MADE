import * as React from "react";
import {useState} from "react";
import "./M0ProjectsView.css"
import {Button, Divider, Icon, Layout, message, Modal, notification, Table, Tooltip} from "antd";

import Sider from "../../navigation/Sider";
import Header from "../../navigation/Header";
import Footer from "../../navigation/Footer";
import ImageButton from "../../common/ImageButton";
import GridOptionEnabled from "../../../assets/grid_enabled.png";
import GridOptionDisabled from "../../../assets/grid_disabled.png";
import TableOptionEnabled from "../../../assets/table_enabled.png";
import TableOptionDisabled from "../../../assets/table_disabled.png";
import {FileStatus, Version} from "../../../model/types";
import GenericModal from "../../common/GenericModal";
import {State} from "../../../model/stateEntity";
import {ROUTES} from "../../../constants/routes";
import GitConnectionView from "./git/GitConnectionView";
import Settings from "./Settings";
import {useProjects} from "../../../contexts/Projects";
import {ProjectVersionProvider} from "../../../contexts/ProjectVersion";

import {useHistory} from "react-router";
import {EditGitConnectionProvider, useEditGitConnection} from "../../../contexts/EditGitConnection";
import ValidationButton from "./actions/ValidationButton";
import DownloadButton from "./actions/DownloadButton";

const {confirm} = Modal;

const M0ProjectsView = () => {
    const [layout, setLayout] = useState<"grid" | "table">("table");
    const [selectedVersions, setSelectedVersions] = useState<State<Version>[]>([]);

    const history = useHistory();
    const projects = useProjects();

    const onDeleteProjects = () => {
        if (selectedVersions.length === 0) {
            message.info("No projects are selected");
            return;
        }
        confirm({
            title: "Do you really want to delete the following projects?",
            content: <ul>{selectedVersions.map(version => {
                return <li>{projects.getProjectTitle(version)}</li>;
            })}</ul>,
            onOk: () => deleteVersions(selectedVersions),
            onCancel() {
            }
        });
    };

    const deleteVersions = (versions: State<Version>[]) => {
        versions.forEach(version => {
            const project = projects.getProjectFromVersion(version);
            if (!project) {
                notification['error']({
                    message: `Error while deleting "${projects.getFullTitle(version)}"`,
                    description: "No corresponding project found"
                });
                return;
            }
            project.versions.remove(version.getEntity()).then((deleted: Version) => {
                const newSelectedVersions = selectedVersions.filter(selectedVersion => selectedVersion.id != deleted.id);
                setSelectedVersions(newSelectedVersions);
            }).catch((error: Error) => {
                notification['error']({
                    message: `Error while deleting version "${projects.getProjectTitle(version)}"`,
                    description: error.message
                });
            });
        });
    };

    const renderTableOption = (): React.ReactNode => {
        return layout === "table" ?
            <ImageButton src={TableOptionDisabled} alt={"table layout"}/> :
            <ImageButton src={TableOptionEnabled} alt={"table layout"} onClick={() => {
                setLayout("table");
            }}/>
    };

    const renderGridOption = (): React.ReactNode => {
        return layout === "table" ?
            <ImageButton src={GridOptionEnabled} alt={"grid layout"} onClick={() => {
                setLayout("grid");
            }}/> :
            <ImageButton src={GridOptionDisabled} alt={"grid layout"}/>
    };

    const renderProjects = (): React.ReactNode => {
        return layout === "table" ?
            // @ts-ignore
            <Table<State<Version>> columns={versionColumns()}
                                   dataSource={projects.orderVersionsByTitle()}
                                   rowKey={(record: State<Version>) => record.id.toString()}
                                   rowSelection={rowSelection}
                                   onRow={onRow}
                                   size={"small"}
            /> :
            <span></span>
    };

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

    const versionColumns = () => [
        {
            title: "Name", dataIndex: "version", render: (text: any, record: State<Version>) => {
                return <span>{projects.getProjectTitle(record)}</span>
            }
        },
        {title: "Description", dataIndex: "description", key: "project.description",},
        {title: "Extension", dataIndex: "fileExtension", key: "fileExtension",},
        {
            title: "Validity Status", align: "center", dataIndex: "status", render: (text: any, record: State<Version>) => {
                // const files = record.getEntity().files;
                // if (files && files.filter(file => file.status === FileStatus.IN_CONFLICT).length > 0)
                //     return <Icon type="exclamation" />;
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
                        <ValidationButton/>
                        <Divider type={"vertical"}/>
                        <DownloadButton/>
                        <Divider type={"vertical"}/>
                        {record.usersPermissions.canSetGitRepo && <EditGitConnectionProvider>
                            <GitConnectionFormWrapper record={record}/>
                            <Divider type={"vertical"}/>
                        </EditGitConnectionProvider>}
                        <GenericModal width={1000} title={projects.getProjectTitle(record)}
                                      content={<Settings/>}>
                            <Tooltip title={"settings"}><Button icon="setting" className={"action-button"}/></Tooltip>
                        </GenericModal>
                    </span>
                </ProjectVersionProvider>
            }
        }
    ];


    return <Layout>
        <Sider/>
        <Layout style={{marginLeft: 200, height: '100vh', width: '100%'}}>
            <Header title={"Project Overview"}/>
            <Layout.Content style={{margin: '12px 16px'}}>
                <div style={{margin: '12px 8px'}}>
                    {renderTableOption()}
                    <Divider type={"vertical"}/>
                    {renderGridOption()}
                </div>
                {renderProjects()}
            </Layout.Content>
            <Footer
                addIcon={() => history.push(ROUTES.NEW_PROJECT)}
                garbageIcon={() => onDeleteProjects()}/>
        </Layout>
    </Layout>
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


export default M0ProjectsView;