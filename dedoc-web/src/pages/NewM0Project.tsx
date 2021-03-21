import * as React from "react";
import {useHistory} from "react-router";
import {Layout} from "antd";
import Sider from "../components/navigation/Sider";
import Header from "../components/navigation/Header";
import {ProjectLevel, Version} from "../model/types";
import NewM0ProjectForm from "../components/projects/m0/NewM0ProjectForm";
import {showError} from "../constants/functions";
import {useEntityArray} from "../hooks/useEntityArray";
import {restLevelProject} from "../rest_api/Project";
import {restVersion} from "../rest_api/Version";


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
                    <NewM0ProjectForm history={history} versions={versions} models={models} />
                </Layout.Content>
            </Layout>
        </Layout>);
};