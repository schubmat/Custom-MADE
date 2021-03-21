import * as React from "react";
import {Button, message, Popconfirm} from "antd";
import {Permissions} from "../../../model/types";
import MembersTable from "./MembersTable";
import MembershipForm from "./MembershipForm";
import {useProjectVersion} from "../../../contexts/ProjectVersion";

export const permissionLevels = [{p: Permissions.REPORTER, name: "Reporter"}, {p: Permissions.CONTRIBUTOR, name: "Contributor"}, {p: Permissions.MAINTAINER, name: "Maintainer"}, {p: Permissions.OWNER, name: "Owner"}];

const MembershipsView = () => {

    const version = useProjectVersion();

    const leaveProject = () => {
        message.error("Operation is not supported (fix authentication context first)");
    };

    const usersPermissions = version ? version.usersPermissions.getEntity() : Permissions.GUEST;
    return <div>
        {usersPermissions.canAddUsers && <div>
            <MembershipForm/>
            <p/>
        </div>}
        {version && <MembersTable/>}
        {version &&
        !Permissions.equals(Permissions.GUEST, usersPermissions) &&
        !Permissions.equals(Permissions.OWNER, usersPermissions) &&
        <div>
             <Popconfirm
                title={"Are you sure to leave this project?"}
                okText="Yes" cancelText="No"
                onConfirm={leaveProject}>
                <p/>
                <Button>
                    Leave project
                </Button>
            </Popconfirm>
        </div>}
    </div>
};

export default MembershipsView;