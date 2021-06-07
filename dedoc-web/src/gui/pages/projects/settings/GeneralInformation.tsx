import React from 'react';
import {GitConfiguration} from "../../../../model/types";
import {Skeleton, Typography} from "antd";
import {State} from "../../../../state/stateEntity";
import "./GeneralInformation.css";
import {useProjectVersion} from "../../../shared/contexts/ProjectVersion";
import {useModels, useProjects} from "../../../shared/contexts/Projects";
import {useModelFromProject} from "./useModel";


const {Text} = Typography;

const GeneralInformation = () => {
    const version = useProjectVersion();
    const projects = useProjects();
    const models = useModels();
    const model = useModelFromProject(version);

    const renderGitRepoInfos = (git: State<GitConfiguration>) => {
        if (!git || !git.gitAccount)
            return <Text disabled>No git repo set</Text>;
        return <div>
            <div className="info-item-small">
                <Text strong>Clone url</Text>&nbsp;
                <Text copyable>{git.gitAccount.plattformUrl}{git.subUrl}</Text>
            </div>
            <div className="info-item-small">
                <Text strong>Branch</Text>&nbsp;
                <Text>{git.branch}</Text>
            </div>
            <div className="info-item-small">
                <Text strong>Folder</Text>&nbsp;
                <Text>{git.dir}</Text>
            </div>
        </div>
    };

    if (!version || !model)
        return <Skeleton/>;
    const git = version.gitConfiguration;
    return <div>
        <div className="info-item">
            <h3>Name</h3>
            <Text style={{width: '100%'}} editable>{projects.getProjectTitle(version)}</Text>
        </div>
        <div className="info-item">
            <h3>Grammar</h3>
            <Text>{models.getFullTitle(model)}</Text>
        </div>
        <div className="info-item">
            <h3>File extension</h3>
            <Text>{model && model.dslExtension}</Text>
        </div>
        <div className="info-item">
            <h3>Git repo</h3>
            {renderGitRepoInfos(git)}
        </div>
    </div>;
};

export default GeneralInformation;