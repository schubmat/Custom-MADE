import React, {useContext} from "react";
import {Permissions, VersionMembership} from "../../../model/types";
import {State} from "../../../state/stateEntity";
import {useProjectVersion} from "../contexts/ProjectVersion";
import {useAuthentication} from "../contexts/Authentication";

const MembershipContext = React.createContext<State<VersionMembership> | null>(null);

export const MembershipProvider = MembershipContext.Provider;

export const useMembershipContext = () => {
    const context = useContext(MembershipContext);
    if (context == null)
        throw new Error("No MembershipProvider");
    const auth = useAuthentication();
    const version = useProjectVersion();
    const usersPermissions = version.usersPermissions;

    const canUserEdit = () => {
        if (!auth.user)
            return false;
        const username = auth.user.username;
        return username != context.user.username &&
            usersPermissions.canAddUsers &&
            usersPermissions.getEntity().isGreaterThan( context.permissions.getEntity());
            // usersPermissions.isGreaterThan(context.permissions.getEntity());
    };

    return {membership: context, canUserEdit};
};