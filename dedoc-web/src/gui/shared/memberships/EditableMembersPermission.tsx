import {useMembershipContext} from "./MembershipContext";
import {useProjectVersion} from "../contexts/ProjectVersion";
import * as React from "react";
import PermissionSelect from "./PermissionSelect";
import {permissionLevels} from ".";
import {Permissions, VersionMembership} from "../../../model/types";
import {globalMessage} from "../message/globalMessage";

export const EditableMembersPermission = () => {
    const {membership, usersPermissions, canUserEdit, setPermissions} = useEditableMembersPermission();
    const message = globalMessage(`${membership.user.username}'s permissions`);

    if (canUserEdit()) {
        return <PermissionSelect
            usersPermissions={usersPermissions.getEntity()}
            defaultValue={membership.permissions.getEntity()}
            onSelect={newPermissions => setPermissions(newPermissions,
                () => message.success("Permissions are changed"),
                error => message.error(error.message))}
        />;
    }

    const permission = permissionLevels.find(permission => permission.p.equals( membership.permissions.getEntity()));
    if (permission)
        return <span>{permission.name}</span>;
    return <span/>;
};

const useEditableMembersPermission = () => {
    const {membership, canUserEdit} = useMembershipContext();
    const version = useProjectVersion();

    const setPermissions = (permissions: Permissions,
                           onSuccess: (ship: VersionMembership) => void,
                           onError: (error: Error) => void) => {
        const newMembership = {...membership,
            permissions: permissions,
            version: version.getEntity()};
        version.memberships.put(newMembership).then(onSuccess).catch(onError);
    };

    return {
        membership,
        canUserEdit,
        usersPermissions: version.usersPermissions,
        setPermissions
    }
};