import * as React from "react";
import {Permissions} from "../../../model/types";
import MembersTable from "./MembersTable";
import {useProjectVersion} from "../contexts/ProjectVersion";
import {LeaveProjectButton} from "./LeaveProjectButton";
import AddMemberForm from "./AddMemberForm";

export const permissionLevels = [{p: Permissions.REPORTER, name: "Reporter"}, {p: Permissions.CONTRIBUTOR, name: "Contributor"}, {p: Permissions.MAINTAINER, name: "Maintainer"}, {p: Permissions.OWNER, name: "Owner"}];

export const MembershipsView = () => {

    const version = useProjectVersion();
    const usersPermissions = version ? version.usersPermissions.getEntity() : Permissions.GUEST;

    return <div>
        {usersPermissions.canAddUsers && <div>
            <AddMemberForm/>
            <p/>
        </div>}
        <MembersTable/>
        {!Permissions.equals(usersPermissions, Permissions.GUEST)
            && <LeaveProjectButton/>}
    </div>
};