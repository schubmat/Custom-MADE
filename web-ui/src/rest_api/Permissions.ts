import {DefaultRest} from "./index";
import {Comparable, Permissions} from "../model/types";


export const restPermissions: DefaultRest<Exclude<Permissions,Comparable<Permissions>>> = {
    interface: {
        canBrowseFiles: true,
        canChangeFiles: true,
        canExportFiles: true,
        canAddUsers: true,
        canDeleteVersion: true,
        canUseAsModel: true,
        canSetGitRepo: true,
        untouchable: true,
    },
    get: (id: number) => {throw new Error("operation is not supported")},
    getAll: () => {throw new Error("operation is not supported")},
    create: p => {throw new Error("operation is not supported")},
    delete: p => {throw new Error("operation is not supported")},
    put: p => {throw new Error("operation is not supported")},
    further: {},
    modifiers: {},
};