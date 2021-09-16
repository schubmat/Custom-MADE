import React, {useContext} from "react";
import {ArrayState} from "../../../state/stateArray";
import {User} from "../../../services/users";
import {useEntityArray} from "../../../state/useEntityArray";
import {restUser} from "../../../rest_api/User";
import {showError} from "../../../constants/functions";
import {withProps} from "./with";
import {Version} from "../../../model/types";
import {State} from "../../../state/stateEntity";

const UsersContext = React.createContext<ArrayState<User> | null>(null);

export const UsersProvider = ({children}: {children: React.ReactNode}) => {
    const users = useEntityArray<User>(restUser, showError);
    return withProps({children, value: users}, UsersContext.Provider);
};

export const useUsers = () => {
    const context = useContext(UsersContext);
    if (context == null)
        throw new Error("No UsersProvider");

    const getNotMembers = (version: State<Version>) => {
          return context.getEntityArray()
              .filter(u => !version.memberships.items
                  .find(s => s.user.id == u.id));
    };

    return {
        raw: context,
        getNotMembers: getNotMembers,
    }
};