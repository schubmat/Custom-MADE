import {useProjectVersion} from "../contexts/ProjectVersion";
import {useMembershipContext} from "./MembershipContext";
import {GitUserSettings, VersionMembership} from "../../../model/types";
import {useAuthentication} from "../contexts/Authentication";
import {Tooltip, Typography} from "antd";
import * as React from "react";
import {globalMessage} from "../message/globalMessage";

const {Text} = Typography;


/**
 * aus irgendeinem grund geht hier das übergeben eines properties nicht,
 * deshalb ist copy&paste components....
 * @constructor
 */

export const EditableGitUsername = () => {
    const {commonSettings, membership, isUser, setGitUserSettings} = useEditableGitUserSettings();
    const memberSettings = membership.gitSettings;
    const key = "name";
    const value = commonSettings ? commonSettings[key] : memberSettings[key];
    const message = globalMessage(`${membership.user.username}'s git-settings`);

    const onChangeField = (newVal: string) => {
        const settings = {...memberSettings};
        settings[key] = newVal;
        setGitUserSettings(settings,
            () => message.success("Settings are changed"),
            error => message.error(error.message));
    };

    if (commonSettings && isUser) {
        return <Tooltip title={"Individual git-user-settings are disabled"}>
            <Text>{value}</Text>
        </Tooltip>;
    }

    if (isUser)
        return <Text editable={{onChange: onChangeField,}}>
            {value}
        </Text>;

    return <Text>{value}</Text>
};

export const EditableGitEmail = () => {
    const {commonSettings, membership, isUser, setGitUserSettings} = useEditableGitUserSettings();
    const memberSettings = membership.gitSettings;
    const key = "email";
    const value = commonSettings ? commonSettings[key] : memberSettings[key];
    const message = globalMessage(`${membership.user.username}'s git-settings`);

    const onChangeField = (newVal: string) => {
        const settings = {...memberSettings};
        settings[key] = newVal;
        setGitUserSettings(settings,
            () => message.success("Settings are changed"),
            error => message.error(error.message));
    };

    if (commonSettings && isUser) {
        return <Tooltip title={"Individual git-user-settings are disabled"}>
            <Text>{value}</Text>
        </Tooltip>;
    }

    if (isUser)
        return <Text editable={{onChange: onChangeField,}}>
            {value}
        </Text>;

    return <Text>{value}</Text>
};


const EditableGitField = (props: {key: 'name' | 'email'}) => {
    const {commonSettings, membership, isUser, setGitUserSettings} = useEditableGitUserSettings();
    const memberSettings = membership.gitSettings;
    const key = props.key;
    const value = commonSettings ? commonSettings[key] : memberSettings[key];
    const message = globalMessage(`${membership.user.username}'s git-settings`);

    const onChangeField = (newVal: string) => {
        const settings = {...memberSettings};
        settings[key] = newVal;
        setGitUserSettings(settings,
            () => message.success("Settings are changed"),
            error => message.error(error.message));
    };

    if (commonSettings && isUser) {
        return <Tooltip title={"Individual git-user-settings are disabled"}>
            <Text>{value}</Text>
        </Tooltip>;
    }

    if (isUser)
        return <Text editable={{onChange: onChangeField,}}>
            {value}
        </Text>;

    return <Text>{value}</Text>
};

const useEditableGitUserSettings = () => {
    const version = useProjectVersion();
    const {membership} = useMembershipContext();
    const auth = useAuthentication();

    const setGitUserSettings = (newSettings: GitUserSettings,
                                onSuccess: (ship: VersionMembership) => void,
                                onError: (error: Error) => void) => {
        const newMembership = {...membership,
            gitSettings: newSettings,
            version: version.getEntity()};
        version.memberships.put(newMembership).then(onSuccess).catch(onError);
    };

    return {
        commonSettings: version.gitConfiguration ? version.gitConfiguration.commonGitSettings : null,
        membership,
        isUser: auth.user && auth.user.username == membership.user.username,
        setGitUserSettings,
    }
};