import * as React from "react";
import {useState} from "react";
import "./M0ProjectsView.css"
import {Divider, Layout} from "antd";

import GridOptionEnabled from "../../assets/grid_enabled.png";
import GridOptionDisabled from "../../assets/grid_disabled.png";
import TableOptionEnabled from "../../assets/table_enabled.png";
import TableOptionDisabled from "../../assets/table_disabled.png";
import {ROUTES} from "../../../constants/routes";

import {useHistory} from "react-router";
import {Footer} from "../../shared/layout/footer";
import {FooterIconButton} from "../../shared/layout/footer/FooterIconButton";
import {DeleteProjectsButton} from "./DeleteProjectsButton";
import {SelectedProjectsProvider} from "./SelectedProjectsContext";
import ImageButton from "../../shared/dumb/ImageButton";
import Header from "../../shared/layout/Header";
import Sider from "../../shared/layout/sider/";
import {ProjectsTable} from "./ProjectsTable";

const M0ProjectsView = () => {
    const [layout, setLayout] = useState<"grid" | "table">("table");
    const history = useHistory();

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
            <ProjectsTable/> :
            <span></span>
    };

    return <Layout>
        <Sider/>
        <Layout style={{marginLeft: 200, height: '100vh', width: '100%'}}>
            <Header title={"Project Overview"}/>
            <SelectedProjectsProvider>
                <Layout.Content style={{margin: '12px 16px'}}>
                    <div style={{margin: '12px 8px'}}>
                        {renderTableOption()}
                        <Divider type={"vertical"}/>
                        {renderGridOption()}
                    </div>
                    {renderProjects()}
                </Layout.Content>
                <Footer>
                    <FooterIconButton type={"plus-circle"} onClick={() => history.push(ROUTES.NEW_PROJECT)}/>
                    <DeleteProjectsButton/>
                </Footer>
            </SelectedProjectsProvider>
        </Layout>
    </Layout>;
};

export default M0ProjectsView;