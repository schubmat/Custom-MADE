import * as React from "react";
import {useHistory} from "react-router";
import {Layout} from "antd";
import Sider from "../../shared/layout/sider/";
import Header from "../../shared/layout/Header";
import {ProjectLevel, Version} from "../../../model/types";
import {showError} from "../../../constants/functions";
import {useEntityArray} from "../../../state/useEntityArray";
import {restLevelProject} from "../../../rest_api/Project";
import {restVersion} from "../../../rest_api/Version";
import CreateProjectForm from "./CreateProjectForm";


export const NewProject = () => {

    const history = useHistory();
    const versions = useEntityArray<Version>(restVersion, showError);
    const models = useEntityArray(restLevelProject(ProjectLevel.M1), showError);

    return (
        <Layout>
            <Sider/>
            <Layout style={{marginLeft: 200, height: '100vh', width: '100%'}}>
                <Header title={"New project"}/>
                <Layout.Content style={{margin: '12px 16px'}}>
                    <CreateProjectForm history={history} versions={versions} models={models} />
                </Layout.Content>
            </Layout>
        </Layout>);
};