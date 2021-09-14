import * as React from "react";
import {useHistory} from "react-router";
import {Layout} from "antd";
import Sider from "../../shared/layout/sider/";
import Header from "../../shared/layout/Header";
import {Project} from "../../../model/types";
import {showError} from "../../../constants/functions";
import {useEntityArray} from "../../../state/useEntityArray";
import {restProject} from "../../../rest_api/Project";
import CreateModelForm from "./CreateModelForm";


export const NewModel = () => {
    const history = useHistory();
    const models = useEntityArray<Project>(restProject, showError);

    return (
        <Layout>
            <Sider/>
            <Layout style={{marginLeft: 200, height: '100vh', width: '100%'}}>
                <Header title={"New model"}/>
                <Layout.Content style={{margin: '12px 16px'}}>
                    <CreateModelForm history={history} models={models} />
                </Layout.Content>
            </Layout>
        </Layout>);
};
