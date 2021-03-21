import {DefaultRest} from "./index";
import {GitAccount} from "../model/types";
import {createEntityIncludingFile, fetchEntities} from "../services/rest";
import {authGet} from "../services/http";

export interface GitAccountRest extends DefaultRest<GitAccount> {
    further: {
        checkConnection: (gitId: number, subUrl: string) => Promise<boolean>,
        getBranches: (gitId: number, subUrl: string) => Promise<string[]>,
        getRemoteDirs: (gitId: number, subUrl: string, branch: string) => Promise<string[]>
    }
}

export const restGitAccount: GitAccountRest = {
    interface: {
        id: true,
        plattformUrl: true,
        name: true,
        public: true,
        creator: true,
        sshKey: true
    },
    get: (id: number) => {throw new Error("operation is not supported")},
    getAll: () => fetchEntities<GitAccount>('/gits'),
    create: git => {
        if (!git.sshKey)
            throw new Error("Private key is not specified");
        return createEntityIncludingFile<GitAccount>(git, git.sshKey, `gits`);
    },
    delete: git => {throw new Error("operation is not supported")},
    put: git  => {throw new Error("operation is not supported")},
    further: {
        checkConnection: (gitId, subUrl) =>
            authGet<string[]>(`gits/${gitId}/branches`, {subUrl: subUrl}).then(branches => branches.length > 0),
        getBranches: (gitId, subUrl) => authGet<string[]>(`gits/${gitId}/branches`, {subUrl: subUrl}),
        getRemoteDirs: (gitId, subUrl, branch) => authGet<string[]>(`gits/${gitId}/dirs`, {subUrl: subUrl, branch: branch}),
    },
    modifiers: {},
};