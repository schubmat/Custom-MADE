import {DefaultRest} from "./index";
import {Permissions, VersionMembership} from "../model/types";
import {createEntity, deleteEntity, updateEntity} from "../services/rest";
import {ROUTES} from "../constants/routes";

export interface VersionMembershipRest extends DefaultRest<VersionMembership> {
    further: {
        deleteUser: (versionId: number) => Promise<VersionMembership>
    }
}

const checkRequest = (ship: Partial<VersionMembership>) => {
    if (!ship.permissions)
        throw new Error("Permissions are not specified");
    if (!ship.version || !ship.version.id)
        throw new Error("Version is not specified");
    if (!ship.user || !ship.user.id)
        throw new Error("User is not specified");
    return {
        id: ship.id !== undefined ? ship.id : -1,
        permissions: ship.permissions,
        version: ship.version,

        gitSettings: ship.gitSettings
    };
};

const getIdData = (ship: Partial<VersionMembership>) => {
    if (!ship.version || !ship.version.id)
        throw new Error("Version is not specified");
    if (!ship.user || !ship.user.id)
        throw new Error("User is not specified");
    return {
        version: ship.version,
        user: ship.user,
    };
};

export const restVersionMembership: VersionMembershipRest = {
    interface: {
        id: true,
        user: true,
        version: true,
        permissions: true,
        gitSettings: true
    },
    get: (id: number) => {throw new Error("operation is not supported")},
    getAll: () => {throw new Error("use create instead")},
    create: request => {
        // @ts-ignore
        const idData = getIdData(request);
        const ship = {...request, ...idData};
        return createEntity<VersionMembership>(ship, `${ROUTES.VERSIONS}/${ship.version.id}/members`);
    },
    delete: request => {
        const idData = getIdData(request);
        const ship = {...request, ...idData};
        if (!ship.id)
            throw new Error("Id has to be specified");
        const id = ship.id;
        return deleteEntity<VersionMembership>(`${ROUTES.VERSIONS}/${ship.version.id}/members/${ship.user.id}`).then(deleted => {
            return {...deleted, id: id};
        });
    },
    put: request => {
        const idData = getIdData(request);
        const ship = {...request, ...idData};
        return updateEntity<VersionMembership>(ship, `${ROUTES.VERSIONS}/${ship.version.id}/members/${ship.user.id}`);
    },
    further: {
        deleteUser: versionId => deleteEntity<VersionMembership>(`${ROUTES.VERSIONS}/${versionId}/members/user`)
    },
    modifiers: {},
};