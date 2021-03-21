import {User} from "../services/users";
import {DefaultRest} from "./index";
import {fetchEntities} from "../services/rest";

export interface UserRest extends DefaultRest<User> {
    further: {
    }
}

export const restUser: UserRest = {
    interface: {
        id: true,
        username: true,
        password: true,
        email: true,
        role: true
    },
    get: (id: number) => {throw new Error("operation is not supported")},
    getAll: () => fetchEntities<User>(`/users`),
    create: user => {throw new Error("operation is not supported")},
    delete: user => {throw new Error("operation is not supported")},
    put: user => {throw new Error("operation is not supported")},
    further: {},
    modifiers: {},
};