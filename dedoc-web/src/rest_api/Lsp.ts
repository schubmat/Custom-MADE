import {DefaultRest} from "./index";
import {LSPInstance} from "../model/types";
import {fetchEntity} from "../services/rest";
import {ROUTES} from "../constants/routes";
import {fetchAuthAPI} from "../services/http";

export interface LspRest extends DefaultRest<LSPInstance> {
    further: {
        destroy: (instanceId: number) => Promise<void>;
    }
}

export const restLsp: LspRest = {
    interface: {
        id: true,
        port: true,
        lspId: true
    },
    get: id => fetchEntity<LSPInstance>(`${ROUTES.LSPS}/${id}`),
    getAll: () => {throw new Error("operation is not supported")},
    create: lsp => {throw new Error("operation is not supported")},
    delete: lsp  => {throw new Error("operation is not supported")},
    put: lsp  => {throw new Error("operation is not supported")},
    further: {
        destroy: id => fetchAuthAPI(`${ROUTES.LSP_INSTANCES}/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    modifiers: {},
};