import * as React from "react";
import {useState} from "react";
import {Divider, Layout, message, Modal, notification} from "antd";

import Sider from "../../navigation/Sider";
import Header from "../../navigation/Header";
import Footer from "../../navigation/Footer";
import M1ProjectTable from "./M1ProjectTable";

import GridOptionEnabled from "../../../assets/grid_enabled.png";
import GridOptionDisabled from "../../../assets/grid_disabled.png";
import TableOptionEnabled from "../../../assets/table_enabled.png";
import TableOptionDisabled from "../../../assets/table_disabled.png";

import {ProjectLevel, Version} from "../../../model/types";
import {ROUTES} from "../../../constants/routes";
import ImageButton from "../../common/ImageButton";
import {State} from "../../../model/stateEntity";
import {useModels} from "../../../contexts/Projects";
import {useHistory} from "react-router";
import {useVersionSelection, VersionSelectionProvider} from "../../../contexts/VersionSelection";


const {confirm} = Modal;

const M1ProjectsView = (props: any) => (
    <VersionSelectionProvider projectLevel={ProjectLevel.M1}>
        <Component {...props}/>
    </VersionSelectionProvider>
);

const Component = () => {
    const [layout, setLayout] = useState<"grid" | "table">("table");
    const history = useHistory();
    const models = useModels();
    const versionSelection = useVersionSelection();
    const {selectedVersions, onSelectionChange} = versionSelection;

    const deleteVersions = (versions: State<Version>[]) => {
        versions.forEach(version => {
            const project = models.getProjectFromVersion(version);
            if (!project) {
                notification['error']({
                    message: `Error while deleting "${version.version}"`,
                    description: "No response from server"
                });
                return;
            }
            project.versions.remove(version.getEntity()).catch((error: Error) => {
                notification['error']({
                    message: `Error while deleting version "${project && project.name} ${version.version}"`,
                    description: error.message
                });
            });
        });
    };

    const onDeleteVersions = () => {
        if (selectedVersions.length == 0) {
            message.info("No versions are selected");
            return;
        }
        confirm({
            title: "Do you really want to delete the following versions?",
            content: <ul>{selectedVersions.map(version => {
                const project = models.getProjectFromVersion(version);
                return <li>{project && project.name} {version.version}</li>})}</ul>,
            onOk: () => deleteVersions(selectedVersions),
            onCancel() {}});
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
            <M1ProjectTable/> :
            <span></span>
    };

    return <Layout>
        <Sider/>
        <Layout style={{marginLeft: 200, height: '100vh', width: '100%'}}>
            <Header title={"Projects"}/>
            <Layout.Content style={{margin: '12px 16px'}}>
                <div style={{margin: '12px 8px'}}>
                    {renderTableOption()}
                    <Divider type={"vertical"}/>
                    {renderGridOption()}
                </div>
                {renderProjects()}
            </Layout.Content>
            <Footer
                addIcon={() => history.push(ROUTES.NEW_MODEL)}
                garbageIcon={onDeleteVersions}
            />
        </Layout>
    </Layout>;
};

export default M1ProjectsView;