import React, {useContext} from "react";
import {ArrayState} from "../../../../state/stateArray";
import {useEntityArray} from "../../../../state/useEntityArray";
import {showError} from "../../../../constants/functions";
import {withProps} from "../../../shared/contexts/with";
import {GitAccount} from "../../../../model/types";
import {restGitAccount} from "../../../../rest_api/GitAccount";
import {State} from "../../../../state/stateEntity";

const GitAccountsContext = React.createContext<ArrayState<GitAccount> | null>(null);

export const GitAccountsProvider = ({children}: {children: React.ReactNode}) => {
    const gitAccounts = useEntityArray<GitAccount>(restGitAccount, showError);
    return withProps({children, value: gitAccounts}, GitAccountsContext.Provider);
};

export const useGitAccounts = () => {
    const context = useContext(GitAccountsContext);
    if (context == null)
        throw new Error("No GitAccountsProvider");

    const getRelevance = (gitAccount: State<GitAccount>, cloneUrl: string): number => {
        return gitAccount.plattformUrl.toLowerCase().indexOf(cloneUrl.toLowerCase());
    };

    const orderedByRelevance = (cloneUrl: string) => {
        return context.items
            .filter(git => getRelevance(git, cloneUrl) > 0)
            .sort((a, b) => getRelevance(a, cloneUrl) - getRelevance(b, cloneUrl));
    };

    const matches = (gitAccount: State<GitAccount> | GitAccount, cloneUrl: string) => {
        return cloneUrl.toLowerCase().indexOf(gitAccount.plattformUrl.toLowerCase()) >= 0;
    };

    return {
        raw: context,
        orderByRelevance: orderedByRelevance,
        matches: matches
    }
};