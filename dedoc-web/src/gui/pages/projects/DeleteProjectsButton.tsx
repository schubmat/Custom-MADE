import {FooterIconButton} from "../../shared/layout/footer/FooterIconButton";
import * as React from "react";
import {message, Modal, notification} from "antd";
import {State} from "../../../state/stateEntity";
import {Version} from "../../../model/types";
import {useSelectedProjectsContext} from "./SelectedProjectsContext";
import {useProjects} from "../../shared/contexts/Projects";

const {confirm} = Modal;

export const DeleteProjectsButton = () => {

    const [selectedVersions, setSelectedVersions] = useSelectedProjectsContext();
    const projects = useProjects();

    const onDeleteProjects = () => {
        if (selectedVersions.length == 0)
            return;
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

    return <FooterIconButton type={"delete"}
                             readyText={"delete selected projects"}
                             loading={false}
                             onClick={onDeleteProjects}/>;
};