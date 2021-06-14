import {useProjectVersion} from "../../shared/contexts/ProjectVersion";
import {useProjects} from "../../shared/contexts/Projects";
import {globalMessage} from "../../shared/message/globalMessage";
import * as React from "react";
import ActionButton from "../../shared/dumb/ActionButton";
import {usePromise} from "../../shared/usePromise";
import {ValidatedVersion} from "../../../rest_api/Version";
import {VersionFeedback} from "../../shared/message/versionFeedback";

const ValidateProjectButton = () => {
    const version = useProjectVersion();
    const projects = useProjects();
    const message = globalMessage(`${projects.getProjectTitle(version)} validation`);

    const onSuccess = (validatedVersion: ValidatedVersion) => {
        VersionFeedback.onValidation(validatedVersion, projects.getProjectTitle(validatedVersion), message);
    };

    const call = () => {
        return version.validate(version.id);
    };

    const promise = usePromise(
        call,
        onSuccess,
        error => message.error(error.message),
    );

    return <ActionButton icon="file-done"
                         readyText={"validate files"}
                         loadingText={"waiting for server to validate files..."}
                         loading={promise.isLoading}
                         onClick={promise.start}
    />
};

export default ValidateProjectButton;