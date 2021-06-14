import {useMembershipContext} from "./MembershipContext";
import {Button, Icon} from "antd";
import * as React from "react";
import {globalMessage} from "../message/globalMessage";
import {useProjectVersion} from "../contexts/ProjectVersion";

export const RemoveUserButton = () => {

    const {canUserEdit, removeMembership, membership} = useRemoveUser();
    const message = globalMessage(`Remove ${membership.user.username}`);

    return <Button size="small"
                   disabled={!canUserEdit()}
                   onClick={() => removeMembership(
                       () => {},
                       error => message.error(error.message))}>
        <Icon type="user-delete"/>
    </Button>;
};

const useRemoveUser = () => {
    const version = useProjectVersion();
    const {membership, canUserEdit} = useMembershipContext();

    const removeMembership = (onSuccess: () => void,
                              onError: (error: Error) => void) => {
        const call = {...membership, ...{version: version.getEntity()}};
        version.memberships.remove(call)
            .then(onSuccess)
            .catch(onError);
    };

    return {
        membership,
        canUserEdit,
        removeMembership,
    }

};