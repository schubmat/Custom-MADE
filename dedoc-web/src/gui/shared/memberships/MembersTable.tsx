import * as React from "react";
import {Permissions, VersionMembership} from "../../../model/types";
import {Table, Typography} from "antd";
import {User} from "../../../services/users";
import {useProjectVersion} from "../contexts/ProjectVersion";
import {MembershipProvider} from "./MembershipContext";
import {RemoveUserButton} from "./RemoveUserButton";
import {State} from "../../../state/stateEntity";
import {EditableMembersPermission} from "./EditableMembersPermission";
import {EditableGitEmail, EditableGitUsername} from "./EditableGitUserSettings";

const {Text} = Typography;


const MembersTable = () => {

    const {membersSorted, commonGitSettings, canAddUsers} = useMembers();

    const membershipColumns = () => [
        {title: "User", key: "username", dataIndex: "user.username"},
        {title: "Email", key: "email", dataIndex: "user.email"},
        {
            title: "Type", key: "role",
            render: (ship: State<VersionMembership>) => <MembershipProvider value={ship}>
                <EditableMembersPermission/>
            </MembershipProvider>
        },
        {
            title: "Git Username",
            key: "gitUsername",
            render: (ship: State<VersionMembership>) => <MembershipProvider value={ship}>
                <EditableGitUsername/>
            </MembershipProvider>
        },
        {
            title: "Git Email",
            key: "gitEmail",
            render: (ship: State<VersionMembership>) => <MembershipProvider value={ship}>
                <EditableGitEmail/>
            </MembershipProvider>        },
        {
            title: "", key: "actions", render: (ship: State<VersionMembership>) => {
                if (canAddUsers) {
                    return <MembershipProvider value={ship}>
                        <RemoveUserButton/>
                    </MembershipProvider>
                }
                return <span/>
            }
        }
    ];

    return <div>
        {commonGitSettings && <Text
            type="secondary">Individual git-user-settings are disabled</Text>}
        <Table
            columns={membershipColumns()}
            dataSource={membersSorted}
            rowKey={(ship: State<VersionMembership>) => ship.user.id.toString()}
            size={"small"}
            pagination={false}
        />
    </div>
};

const useMembers = () => {
    const version = useProjectVersion();
    const commonGitSettings = version.gitConfiguration && version.gitConfiguration.commonGitSettings ? version.gitConfiguration.commonGitSettings.getEntity() : null;
    const membersSorted = version.memberships.items
        .sort((a, b) => a.permissions.getEntity().contains(b.permissions.getEntity()) ? -1 : 1);

    return {
        membersSorted,
        commonGitSettings,
        canAddUsers: version.usersPermissions.canAddUsers,
    }
};

export default MembersTable;