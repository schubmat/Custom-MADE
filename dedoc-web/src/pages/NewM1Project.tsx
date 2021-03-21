import * as React from "react";
import {useHistory} from "react-router";
import {Layout} from "antd";
import Sider from "../components/navigation/Sider";
import Header from "../components/navigation/Header";
import {Project} from "../model/types";
import NewM1ProjectForm from "../components/projects/m1/NewM1ProjectForm";
import {showError} from "../constants/functions";
import {useEntityArray} from "../hooks/useEntityArray";
import {restProject} from "../rest_api/Project";


export const NewModel = () => {
    const history = useHistory();
    const models = useEntityArray<Project>(restProject, showError);

    return (
        <Layout>
            <Sider/>
            <Layout style={{marginLeft: 200, height: '100vh', width: '100%'}}>
                <Header title={"New project"}/>
                <Layout.Content style={{margin: '12px 16px'}}>
                    <NewM1ProjectForm history={history} models={models} />
                </Layout.Content>
            </Layout>
        </Layout>);
};
