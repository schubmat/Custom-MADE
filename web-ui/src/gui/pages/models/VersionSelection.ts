import * as React from "react";
import {Project, ProjectLevel, Version} from "../../../model/types";
import {State} from "../../../state/stateEntity";
import {Setable, withProps} from "../../shared/contexts/with";
import {useContext, useEffect, useState} from "react";
import {useProjectLevel} from "../../shared/contexts/Projects";

interface Data {
    level: ProjectLevel,
    selectedVersions: Setable<State<Version>[]>,
}

const VersionSelectionContext = React.createContext<Data | null>(null);

export const VersionSelectionProvider = (props: {projectLevel: ProjectLevel, children: React.ReactNode}) => {
    const [selectedVersions, setSelectedVersions] = useState<State<Version>[]>([]);
    const projects = useProjectLevel(props.projectLevel);

    useEffect(() => {
        const versions = projects.orderVersionsByTitle();
        const newSelectedVersions = selectedVersions.filter(selected => versions.find(version => version.id == selected.id));
        if (newSelectedVersions.length != selectedVersions.length)
            setSelectedVersions(newSelectedVersions);
    }, [projects.raw, selectedVersions]);

    return withProps({...props, value: {
            level: props.projectLevel,
            selectedVersions: [selectedVersions, setSelectedVersions],
        }}, VersionSelectionContext.Provider);
};

export const useVersionSelection = () => {
    const context = useContext(VersionSelectionContext);
    if (context == null)
        throw new Error("No VersionSelectionProvider");
    const [selectedVersions, setSelectedVersions] = context.selectedVersions;

    const onSelectionChange = (newSelectedVersions: State<Version>[], parent: State<Project>) => {
        const selectedVersionsWithoutParent = selectedVersions.filter(v1 => !parent.versions.items.find(v2 => v2.id == v1.id));
        setSelectedVersions(selectedVersionsWithoutParent.concat(newSelectedVersions));
    };

    return {
        selectedVersions: selectedVersions,
        onSelectionChange: onSelectionChange,
    }

};