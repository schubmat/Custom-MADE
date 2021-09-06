import {useVersionSelection} from "./VersionSelection";
import {State} from "../../../state/stateEntity";
import {Version} from "../../../model/types";
import {Modal, notification} from "antd";
import * as React from "react";
import {useModels} from "../../shared/contexts/Projects";
import {FooterIconButton} from "../../shared/layout/footer/FooterIconButton";

const {confirm} = Modal;


export const DeleteVersionButton = () => {
    const {selectedVersions, deleteSelectedVersions, getProject} = useDeleteVersion();
    const onDeleteVersions = () => {
        if (selectedVersions.length == 0)
            return;
        confirm({
            title: "Do you really want to delete the following versions?",
            content: <ul>{selectedVersions.map(version => {
                const project = getProject(version);
                return <li>{project && project.name} {version.version}</li>})}
            </ul>,
            onOk: () => deleteSelectedVersions(),
            onCancel() {}});
    };

    return <FooterIconButton type={"delete"}
                             readyText={"delete selected versions"}
                             loading={false}
                             onClick={onDeleteVersions}/>;
};

const useDeleteVersion = () => {
    const versionSelection = useVersionSelection();
    const {selectedVersions, onSelectionChange} = versionSelection;
    const models = useModels();

    const deleteSelectedVersions = () => {
        selectedVersions.forEach(version => {
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

    const getProject = (version: State<Version>) => {
        return models.getProjectFromVersion(version);
    }

    return {
        selectedVersions,
        deleteSelectedVersions,
        getProject,
    }
};