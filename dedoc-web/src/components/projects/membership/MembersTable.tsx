import * as React from "react";
import {GitUserSettings, Permissions, VersionMembership} from "../../../model/types";
import {permissionLevels} from "./MembershipsView";
import {Button, Icon, message, Table, Tooltip, Typography} from "antd";
import {User} from "../../../services/users";
import {showError} from "../../../constants/functions";
import PermissionSelect from "./PermissionSelect";
import {useAuthentication} from "../../../contexts/Authentication";
import {useProjectVersion} from "../../../contexts/ProjectVersion";

const {Text} = Typography;

const renderUserSettings = (username: string, ship: VersionMembership, commonSettings: GitUserSettings | null, key: 'name' | 'email', put: (ship: VersionMembership, onSuccessMessage: (newShip: VersionMembership) => string) => void) => {
    const isUser = username == ship.user.username;
    const value = commonSettings ? commonSettings[key] : ship.gitSettings[key];
    if (commonSettings && isUser) {
        return <Tooltip title={"Individual git-user-settings are disabled"}>
            <Text>{value}</Text>
        </Tooltip>;
    }
    if (isUser)
        return <Text editable={{onChange: newVal => {
            const settings = {...ship.gitSettings};
                settings[key] = newVal;
                put({...ship, gitSettings: settings}, ship => "Individual git settings were changed");
            }}}>{value}</Text>;
    return <Text>{value}</Text>
};

const putMembership = (existingShip: VersionMembership, permissions: Permissions, put: (ship: VersionMembership, onSucessMessage: (ship: VersionMembership) => string) => void) => {
    const membership = {...existingShip, permissions: permissions};
    put(membership, ship => "Permissions of "+ ship.user.username +" were changed");
};

const canEditMember = (username: string, usersPermissions: Permissions, ship: VersionMembership) =>
    username != ship.user.username && usersPermissions.canAddUsers && Permissions.isGreaterThan(usersPermissions, ship.permissions);

const membershipColumns = (username: string, usersPermissions: Permissions, commonSettings: GitUserSettings | null, removeMembership: (ship: VersionMembership) => void, put: (ship: VersionMembership, onSuccess: (newShip: VersionMembership) => string) => void) => [
    {title: "User", key: "username", dataIndex: "user.username"},
    {title: "Email", key: "email", dataIndex: "user.email"},
    {
        title: "Type", key: "role",
        render: (ship: VersionMembership) => {
            if (canEditMember(username, usersPermissions, ship))
                return <PermissionSelect
                    usersPermissions={usersPermissions}
                    defaultValue={ship.permissions}
                    onSelect={newPermissions => putMembership(ship, newPermissions, put)}/>
            const permission = permissionLevels.find(permission => Permissions.equals(permission.p, ship.permissions));
            if (!permission)
                return <span/>;
            return <span>{permission.name}</span>;
        }
    },
    {title: "Git Username", key: "gitUsername", render: (ship: VersionMembership) => renderUserSettings(username, ship, commonSettings, 'name', put)},
    {title: "Git Email", key: "gitEmail", render: (ship: VersionMembership) => renderUserSettings(username, ship, commonSettings, 'email', put)},
    {
        title: "", key: "actions", render: (ship: VersionMembership) =>
            canEditMember(username, usersPermissions, ship)
            && <Button size="small" onClick={() => removeMembership(ship)}><Icon type="user-delete"/></Button>
    }
];


const MembersTable = () => {
    const auth = useAuthentication();
    const version = useProjectVersion();

    const removeMembership = (ship: VersionMembership) => {
        const call = {...ship, ...{version: version.getEntity()}};
        version.memberships.remove(call)
            .then(() => message.success("Member was removed from version"))
            .catch((error: Error) => message.error(error.message));
    };

    const put = (ship: VersionMembership, onSuccessMessage: (ship: VersionMembership) => string) => {
        version.memberships.put({...ship, version: version.getEntity()}).then(ship => {
            message.success(onSuccessMessage(ship))
        }).catch(showError);
    };

    if (!version || !auth.user)
        return <div/>;
    const username = auth.user.username;
    if (!username)
        return <div/>;
    const commonGitSettings = version.gitConfiguration && version.gitConfiguration.commonGitSettings ? version.gitConfiguration.commonGitSettings.getEntity() : null;
    return <div>
        {commonGitSettings && <Text
            type="secondary">Individual git-user-settings are disabled</Text>}
        <Table
            columns={membershipColumns(username, version.usersPermissions.getEntity(), commonGitSettings, removeMembership, put)}
            dataSource={version.memberships.getEntityArray().sort((a, b) => Permissions.contains(a.permissions, b.permissions) ? -1 : 1)}
            rowKey={(ship: VersionMembership) => ship.user.id.toString()}
            size={"small"}
            pagination={false}
        />
    </div>
};

export default MembersTable;