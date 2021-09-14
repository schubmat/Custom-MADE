import React, {useContext, useEffect, useState} from "react";
import {GitAccount, GitConfiguration, GitUserSettings, Version} from "../../../../model/types";
import {Setable, withProps} from "../../../shared/contexts/with";
import {useGitAccounts} from "./GitAccounts";
import {State} from "../../../../state/stateEntity";
import {useProjectVersion} from "../../../shared/contexts/ProjectVersion";
import {message} from "antd";
import {useAuthentication} from "../../../shared/contexts/Authentication";
import {trimDirNames} from "../../../../constants/functions";
import {FetchFileResponse} from "../../../../services/http";

export enum GitConnectionStatus {
    UNKNOWN, LOADING, FAILED, SUCCESSFUL
}

type CloneUrlSelection = Setable<string>;

type GitAccountSelection = {
    selected: Setable<State<GitAccount> | undefined>,
    available: Setable<State<GitAccount>[]>,
    connectionStatus: Setable<GitConnectionStatus>,
};

type BranchSelection = {
    selected: Setable<string>,
    available: Setable<string[]>,
    loading: Setable<boolean>,
};

type DirSelection = {
    selected: Setable<string>,
    available: Setable<string[]>,
    loading: Setable<boolean>,
};

type UserSelection = {
    selected: Setable<GitUserSettings>,
    isCommon: Setable<boolean>,
};

interface EditGitConnectionContext {
    cloneUrl: CloneUrlSelection,
    gitAccount: GitAccountSelection,
    branch: BranchSelection,
    dir: DirSelection,
    userSettings: UserSelection
}

const EditGitContext = React.createContext<EditGitConnectionContext | null>(null);

export const EditGitConnectionProvider = ({children}: {children: React.ReactNode}) => {
    const cloneUrl = useCloneUrlSelection();
    const gitAccount = useGitAccountSelection(cloneUrl);
    const branch = useBranchSelection(gitAccount);
    const dir = useDirSelection(cloneUrl, gitAccount, branch);
    const userSettings = useGitUserSettings();

    const data = {
        cloneUrl, gitAccount, branch, dir, userSettings
    };

    return withProps({children, value: data}, EditGitContext.Provider);
};


const useCloneUrlSelection = (): CloneUrlSelection => {
    const [cloneUrl, setCloneUrl] = useState<string>("");
    return [cloneUrl, setCloneUrl];
};

const useGitAccountSelection = (cloneUrlSelection: CloneUrlSelection): GitAccountSelection => {
    const [cloneUrl, setCloneUrl] = cloneUrlSelection;
    const [selected, setSelected] = useState<State<GitAccount> | undefined>(undefined);
    const [available, setAvailable] = useState<State<GitAccount>[]>([]);
    const [status, setStatus] = useState<GitConnectionStatus>(GitConnectionStatus.UNKNOWN);
    const gitAccounts = useGitAccounts();

    useEffect(() => {
        if (status != GitConnectionStatus.UNKNOWN)
            setStatus(GitConnectionStatus.UNKNOWN);
    }, [cloneUrl, selected]);

    useEffect(() => {
        const allMatches = gitAccounts.raw.items.filter(git => gitAccounts.matches(git, cloneUrl));
        setAvailable(allMatches);
        //TODO selected custom-made as default
        if (allMatches.length > 0)
            setSelected(allMatches[0]);
        else
            setSelected(undefined);
    }, [cloneUrl]);

    return {
        selected: [selected, setSelected],
        available: [available, setAvailable],
        connectionStatus: [status, setStatus],
    }
};

const useBranchSelection = (gitAccountSelection: GitAccountSelection): BranchSelection => {
    const [connectionStatus, setConnectionStatus] = gitAccountSelection.connectionStatus;
    const [selected, setSelected] = useState<string>("");
    const [available, setAvailable] = useState<string[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (connectionStatus == GitConnectionStatus.UNKNOWN && available.length > 0) {
            setAvailable([]);
        }
    }, [connectionStatus]);

    return {
        selected: [selected, setSelected],
        available: [available, setAvailable],
        loading: [isLoading, setLoading],
    }
};

const getSubUrl = (gitAccount: State<GitAccount> | undefined, cloneUrl: string) => {
    if (!gitAccount || cloneUrl.length == 0)
        return "";
    const index = cloneUrl.toLowerCase().indexOf(gitAccount.plattformUrl) + gitAccount.plattformUrl.length;
    return cloneUrl.substr(index);
};

const useDirSelection = (cloneUrlSelection: CloneUrlSelection, gitAccountSelection: GitAccountSelection, branchSelection: BranchSelection): DirSelection => {
    const [cloneUrl, setCloneUrl] = cloneUrlSelection;
    const [gitAccount, setGitAccount] = gitAccountSelection.selected;
    const [selectedBranch, setSelectedBranch] = branchSelection.selected;
    const [availableBranches, setAvailableBranches] = branchSelection.available;

    const [selected, setSelected] = useState<string>("");
    const [available, setAvailable] = useState<string[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);
    const gitAccounts = useGitAccounts();

    useEffect(() => {
        setAvailable([]);
        if (!availableBranches.find(b => b == selectedBranch))
            return;
        const subUrl = getSubUrl(gitAccount, cloneUrl);
        if (subUrl == "" || !gitAccount || selectedBranch == "")
            return;
        setLoading(true);
        gitAccounts.raw.further.getRemoteDirs(gitAccount.id, subUrl, selectedBranch)
            .then(setAvailable)
            .finally(() => setLoading(false));
    }, [selectedBranch, availableBranches]);

    return {
        selected: [selected, setSelected],
        available: [available, setAvailable],
        loading: [isLoading, setLoading],
    }
};

const defaultUserSettings = {
    name: "Custom-MADE",
    email: "mathias.schubanz@informatik.tu-cottbus.de"
};

const useGitUserSettings = (): UserSelection => {
    const isCommon = useState<boolean>(true);
    const selected = useState<GitUserSettings>(defaultUserSettings);
    return {
        selected: selected,
        isCommon: isCommon,
    }
};



const useCloneUrl = () => {
    const context = useContext(EditGitContext);
    if (context == null)
        throw new Error("No EditGitConnectionProvider");
    const [cloneUrl, setCloneUrl] = context.cloneUrl;
    const gitConfiguration = useProjectVersion().gitConfiguration;

    const resetField = () => {
        const value = gitConfiguration ? gitConfiguration.gitAccount.plattformUrl + gitConfiguration.subUrl : "";
        setCloneUrl(value);
    };

    return {
        value: cloneUrl,
        set: setCloneUrl,
        resetField: resetField,
    };
};

const useGitAccount = () => {
    const context = useContext(EditGitContext);
    if (context == null)
        throw new Error("No EditGitConnectionProvider");
    const [selectedGitAccount, setSelectedGitAccount] = context.gitAccount.selected;
    const [availableGitAccounts, setAvaiableGitAccounts] = context.gitAccount.available;
    const [status, setStatus] = context.gitAccount.connectionStatus;
    const [cloneUrl, setCloneUrl] = context.cloneUrl;
    const [availableBranches, setAvailableBranches] = context.branch.available;
    const gitAccounts = useGitAccounts();
    const gitConfiguration = useProjectVersion().gitConfiguration;

    const resetField = () => {
        const value = gitConfiguration ? gitConfiguration.gitAccount : undefined;
        setSelectedGitAccount(value);
    };

    const selectGitAccount = (gitAccount: State<GitAccount> | GitAccount | undefined) => {
        if (!gitAccount) {
            setSelectedGitAccount(undefined);
            return;
        }
        const newSelected = availableGitAccounts.find(account => account.id == gitAccount.id);
        if (newSelected)
            setSelectedGitAccount(newSelected);
        else
            setSelectedGitAccount(undefined);
    };

    const check = (onError: (error: Error) => void) => {
        if (!selectedGitAccount || cloneUrl.length == 0)
            return;
        const subUrl = getSubUrl(selectedGitAccount, cloneUrl);
        if (subUrl == "")
            return;
        setStatus(GitConnectionStatus.LOADING);
        gitAccounts.raw.further.getBranches(selectedGitAccount.id, subUrl).then(branches => {
            setStatus(branches.length > 0 ? GitConnectionStatus.SUCCESSFUL : GitConnectionStatus.FAILED);
            setAvailableBranches(branches);
        }).catch((error: Error) => {
            setStatus(GitConnectionStatus.UNKNOWN);
            onError(error);
        });
    };

    return {
        availableGitAccounts: availableGitAccounts,
        selectedGitAccount: selectedGitAccount,
        selectGitAccount: selectGitAccount,
        connectionStatus: status,
        checkConnection: check,
        getSubUrl: () => getSubUrl(selectedGitAccount, cloneUrl),
        resetField: resetField,
    }
};

const useBranch = () => {
    const context = useContext(EditGitContext);
    if (context == null)
        throw new Error("No EditGitConnectionProvider");
    const [selectedBranch, setSelectedBranch] = context.branch.selected;
    const [availableBranches, setAvailableBranches] = context.branch.available;
    const [isLoading, setLoading] = context.branch.loading;
    const gitConfiguration = useProjectVersion().gitConfiguration;

    const resetField = () => {
        const initValue = gitConfiguration ? gitConfiguration.branch : "";
        setSelectedBranch(initValue);
    };

    return {
        selectedBranch: selectedBranch,
        setBranch: setSelectedBranch,
        availableBranches: availableBranches,
        isLoading: isLoading,
        resetField: resetField,
    }
};

const useDir = () => {
    const context = useContext(EditGitContext);
    if (context == null)
        throw new Error("No EditGitConnectionProvider");
    const [selectedDir, setSelectedDir] = context.dir.selected;
    const [availableDirs, setAvailableDirs] = context.dir.available;
    const [isLoading, setLoading] = context.dir.loading;
    const gitConfiguration = useProjectVersion().gitConfiguration;

    const resetField = () => {
        const value = gitConfiguration ? gitConfiguration.dir : "";
        setSelectedDir(value);
    };

    return {
        selectedDir: selectedDir,
        setDir: setSelectedDir,
        availableDirs: availableDirs,
        isLoading: isLoading,
        resetField: resetField,
    }
};

const useUserSettings = () => {
    const context = useContext(EditGitContext);
    if (context == null)
        throw new Error("No EditGitConnectionProvider");
    const settings = context.userSettings;
    const [selected, setSelected] = settings.selected;
    const [isCommon, setCommon] = settings.isCommon;
    const gitConfiguration = useProjectVersion().gitConfiguration;

    const resetField = () => {
        setCommon(gitConfiguration && gitConfiguration.commonGitSettings ? true : false);
        let value = gitConfiguration && gitConfiguration.commonGitSettings ?
            gitConfiguration.commonGitSettings.getEntity() : null;
        if (!value)
            value = defaultUserSettings;
        setSelected(value);
    };

    return {...settings, resetField};
};

export const proposedBranches = ["decision-documentation", "develop", "documentation"];
export const defaultBranch = proposedBranches[0];
export const proposedDirs = trimDirNames(["doc/mdr", "doc/decisions", "doc/adr", "decisions"]);
export const defaultDir = proposedDirs[0];
export const useEditGitConnection = () => {
    const auth = useAuthentication();
    const version = useProjectVersion();
    if (!auth || !auth.user)
        throw new Error("No user logged in");
    const user = auth.user;
    const userMembership = version.memberships.items.find(item => item.user.id == user.id);
    const gitConnection = {
        cloneUrl: useCloneUrl(),
        gitAccount: useGitAccount(),
        branch: useBranch(),
        dir: useDir(),
        userSettings: useUserSettings(),
    };

    const resetFields = () => {
        gitConnection.cloneUrl.resetField();
        gitConnection.gitAccount.resetField();
        gitConnection.branch.resetField();
        gitConnection.dir.resetField();
        gitConnection.userSettings.resetField();
    };

    const submit = (): Promise<Required<Version>> => {
        if (!gitConnection.gitAccount.selectedGitAccount)
            return Promise.reject("No GitAccount selected");
        const [userSettings, setUserSettings] = gitConnection.userSettings.selected;
        const [isCommon, setCommon] = gitConnection.userSettings.isCommon;
        const gitConfig: GitConfiguration = {
            gitAccount: gitConnection.gitAccount.selectedGitAccount.getEntity(),
            subUrl: gitConnection.gitAccount.getSubUrl(),
            branch: gitConnection.branch.selectedBranch,
            dir: gitConnection.dir.selectedDir,
            commonGitSettings: isCommon ? userSettings : null,
        };
        if (gitConnection.branch.selectedBranch == "") {
            gitConnection.branch.setBranch(defaultBranch);
            gitConfig.branch = defaultBranch;
        }
        if (gitConnection.dir.selectedDir == "") {
            gitConnection.dir.setDir(defaultDir);
            gitConfig.dir = defaultDir;
        }

        if (!isCommon && userMembership) {
            const membership = {...userMembership.getEntity(), version: version.getEntity(), gitSettings: userSettings};
            return version.memberships.put(membership)
                .then(() => setVersion(gitConfig));
        }
        return setVersion(gitConfig);
    };

    const setVersion = (gitConfig: GitConfiguration): Promise<Required<Version>> => {
        return version.setGitConfig({id: version.id, config: gitConfig});
    };


    return {...gitConnection, submit, resetFields};
};