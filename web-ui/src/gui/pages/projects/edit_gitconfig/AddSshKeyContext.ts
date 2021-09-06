import React, {useContext, useState} from "react";
import {GitAccount} from "../../../../model/types";
import {withProps} from "../../../shared/contexts/with";
import {RcFile} from "antd/lib/upload";
import {useGitAccounts} from "./GitAccounts";

interface AddSshKeyProps {
    plattformUrl: [
        string,
        (url: string) => void],
    sshKey: [
        RcFile | undefined,
        (key: RcFile | undefined) => void],
    onSuccess?: (newGitAccount: GitAccount) => void,
}

const AddSshKeyContext = React.createContext<AddSshKeyProps | null>(null);

export const AddSshKeyProvider = ({presetUrl, onSuccess, children}: {presetUrl: string, onSuccess?: (git: GitAccount) => void, children: React.ReactNode}) => {
    const specificProps: AddSshKeyProps = {
        plattformUrl: useState<string>(presetUrl),
        sshKey: useState<RcFile | undefined>(undefined),
        onSuccess: onSuccess,
    };

    return withProps({children, value: specificProps}, AddSshKeyContext.Provider)
};

export const useAddSshKey = () => {
    const context = useContext(AddSshKeyContext);
    if (context == null)
        throw new Error("No AddSshKeyProvider");
    const [plattformUrl, setPlattformUrl] = context.plattformUrl;
    const [sshKey, setSshKey] = context.sshKey;
    const gitAccounts = useGitAccounts();

    const submit = (onError: (error: Error) => void) => {
        if (!sshKey)
            return;
        const gitAccount: Partial<GitAccount> = {plattformUrl: plattformUrl, sshKey: sshKey};
        gitAccounts.raw.add(gitAccount)
            .then((newAccount: GitAccount) => {
                setSshKey(undefined);
                if (context.onSuccess)
                    context.onSuccess(newAccount);
            })
            .catch(onError);
    };

    return {
        plattformUrl: plattformUrl,
        setPlattformUrl: setPlattformUrl,
        sshKey: sshKey,
        setSshKey: setSshKey,
        submit: submit
    }
};

