import * as React from "react";
import {useState} from "react";
import {Divider, Layout} from "antd";

import Sider from "../../shared/layout/sider/";
import Header from "../../shared/layout/Header";
import M1ProjectTable from "./M1ProjectTable";

import GridOptionEnabled from "../../assets/grid_enabled.png";
import GridOptionDisabled from "../../assets/grid_disabled.png";
import TableOptionEnabled from "../../assets/table_enabled.png";
import TableOptionDisabled from "../../assets/table_disabled.png";

import {ProjectLevel} from "../../../model/types";
import {ROUTES} from "../../../constants/routes";
import ImageButton from "../../shared/dumb/ImageButton";
import {useHistory} from "react-router";
import {VersionSelectionProvider} from "./VersionSelection";
import {FooterIconButton} from "../../shared/layout/footer/FooterIconButton";
import {Footer} from "../../shared/layout/footer";
import {DeleteVersionButton} from "./DeleteVersionButton";


const M1ProjectsView = (props: any) => (
    <VersionSelectionProvider projectLevel={ProjectLevel.M1}>
        <Component {...props}/>
    </VersionSelectionProvider>
);

const Component = () => {
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
            <M1ProjectTable/> :
            <span></span>
    };

    return <Layout>
        <Sider/>
        <Layout style={{marginLeft: 200, height: '100vh', width: '100%'}}>
            <Header title={"Index"}/>
            <Layout.Content style={{margin: '12px 16px'}}>
                <div style={{margin: '12px 8px'}}>
                    {renderTableOption()}
                    <Divider type={"vertical"}/>
                    {renderGridOption()}
                </div>
                {renderProjects()}
            </Layout.Content>
            <Footer>
                <FooterIconButton type={"plus-circle"} onClick={() => history.push(ROUTES.NEW_MODEL)}/>
                <DeleteVersionButton/>
            </Footer>
        </Layout>
    </Layout>;
};

export default M1ProjectsView;