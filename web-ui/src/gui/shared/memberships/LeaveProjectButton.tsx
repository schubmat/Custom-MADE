import {Permissions} from "../../../model/types";
import {Button, message, Popconfirm} from "antd";
import * as React from "react";
import {useProjectVersion} from "../contexts/ProjectVersion";
import {useAuthentication} from "../contexts/Authentication";

export const LeaveProjectButton = () => {

    const {canLeaveProject, leaveProject} = useLeaveProject();

    return  <Popconfirm
                title={"Are you sure to leave this project?"}
                okText="Yes" cancelText="No"
                onConfirm={leaveProject}>
                <p/>
                <Button disabled={!canLeaveProject}>
                    Leave project
                </Button>
            </Popconfirm>;
};


const useLeaveProject = () => {
    const version = useProjectVersion();
    const usersPermissions = version ? version.usersPermissions.getEntity() : Permissions.GUEST;
    const auth = useAuthentication();

    const leaveProject = () => {
        if (!auth.user)
            return;
        const user = auth.user;
        const membership = version.memberships.getEntityArray().find(ship => ship.user.id == user.id);
        if (!membership)
            return;
        const call = {...membership, ...{version: version.getEntity()}};
        version.memberships.remove(call);
    };

    return {
        canLeaveProject: !Permissions.equals(Permissions.GUEST, usersPermissions) &&
            !Permissions.equals(Permissions.OWNER, usersPermissions),
        leaveProject,
    }
};