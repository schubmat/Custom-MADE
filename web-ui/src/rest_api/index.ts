import {File, DeepPartial, GitAccount, LSPInstance, Project, Version, VersionMembership} from "../model/types";
import {ProjectRest, restProject} from "./Project";
import {restVersion, VersionRest} from "./Version";
import {FileRest, restFile} from "./File";
import {GitAccountRest, restGitAccount} from "./GitAccount";
import {restVersionMembership, VersionMembershipRest} from "./VersionMembership";
import {User} from "../services/users";
import {restUser, UserRest} from "./User";
import {LspRest, restLsp} from "./Lsp";
import {isPrimitive, onlyArrayTypes, onlyObjects, onlyPrimitives} from "../state/stateEntity";
import {restPermissions} from "./Permissions";

const restImplementations = [
    restFile,
    restGitAccount,
    restLsp,
    restPermissions,
    restProject,
    restUser,
    restVersion,
    restVersionMembership
];

export type RestApi<T> = DefaultRest<T> &
    T extends File ? FileRest :
        T extends GitAccount ? GitAccountRest :
            T extends LSPInstance ? LspRest :
                T extends Project ? ProjectRest :
                    T extends User ? UserRest :
                        T extends Version ? VersionRest :
                            T extends VersionMembership ? VersionMembershipRest :
                                DefaultRest<T>;
type toRestApis<T> = {
    [P in keyof T]: RestApi<T[P]>
}
type FieldsAs<T, Type> = {
    [P in keyof T]: Type;
};

export type restInterface<T> =
    FieldsAs<onlyPrimitives<T>, boolean> &
    FieldsAs<onlyObjects<T>, boolean> &
    toRestApis<onlyObjects<onlyArrayTypes<T>>> &
    FieldsAs<onlyPrimitives<onlyArrayTypes<T>>, boolean>;

export const getRestApi = <T>(entity: T): RestApi<T>  => {
    for (let api of restImplementations) {
        if (isAssignable(api.interface, entity)) {
            // @ts-ignore
            return api;
        }
    }
    // console.log("No rest api specified for this entity");
    // console.log(entity);
    // @ts-ignore
    return {
        interface: attrsToBooleans<T>(entity),
        getAll: () => Promise.resolve([]),
        get: (x: number) => {throw new Error("No rest api specified for this entity")},
        create: (x: DeepPartial<T>) => {throw new Error("No rest api specified for this entity")},
        delete: (x: Partial<T>) => {throw new Error("No rest api specified for this entity")},
        put: (x: Partial<T>) => {throw new Error("No rest api specified for this entity")},
        further: {}
    };
};

function attrsToBooleans<T>(entity: any):restInterface<T> {
    const result: any = {};
    Object.keys(entity).forEach(key => result[key] = isPrimitive(entity[key]) ? true : undefined);
    return result;
}

function isAssignable(entity: any, necessary: any): boolean {
    for (let key of Object.keys(necessary)) {
        if (!entity[key])
            return false;
    }
    return true;
}

export interface DefaultRest<T> {
    interface: restInterface<Required<T>>;
    getAll: () => Promise<T[]>;
    get: (id: number) => Promise<Required<T>>;
    create: (x: DeepPartial<T>) => Promise<T>;
    delete: (x: Partial<T>) => Promise<T>;
    put: (x: T) => Promise<T>;
    further: {};
    modifiers: any;
}