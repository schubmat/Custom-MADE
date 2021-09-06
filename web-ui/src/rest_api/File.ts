import {DefaultRest} from "./index";
import {File, Version} from "../model/types";
import {
    createEntity,
    deleteEntity,
    fetchEntity,
    fetchFileWithGet,
    patchEntity,
    patchFileContent
} from "../services/rest";
import {FetchFileResponse} from "../services/http";
import {restUser} from "./User";

export interface FileValidationDTO {
    file: File,
    log: string,
}
export interface ValidatedFile extends File {
    log: string,
}

export interface FileRest extends DefaultRest<File> {
    further: {
        fetchVersion: (fileId: number) => Promise<Required<Version>>,
        getRaw: (fileId: number) => Promise<FetchFileResponse>,
        getExport: (fileId: number) => Promise<FetchFileResponse>,
    },
    modifiers: {
        validate: (fileId: number) => Promise<ValidatedFile>,
    }
}

const getById = (id: number) => fetchEntity<File>(`/files/${id}`);

export const restFile: FileRest = {
    interface: {
        id: true,
        name: true,
        content: true,
        createdAt: true,
        lastEdited: true,
        editorsAsUsers: restUser,
        status: true,
        version: true
    },
    get: getById,
    getAll: () => {throw new Error("operation is not supported")},
    create: file => {
        const version = file.version;
        if (!version || !version.id)
            throw new Error("Version is not specified");
        return createEntity<File>(file, `/versions/${version.id}/files`);
    },
    delete: file => {throw new Error("operation is not supported")},
    //     return deleteEntity<File>(`/files/${file.id}`);
    // },
    put: file => {throw new Error("rest.put is depricated! use setFileContent instead")},
    further: {
        fetchVersion: fileId => fetchEntity<Version>(`/files/${fileId}/version`),
        getRaw: (fileId => fetchFileWithGet(`/files/${fileId}/raw`)),
        getExport: (fileId => fetchFileWithGet(`/files/${fileId}/export`)),
    },
    modifiers: {
        validate: fileId => patchEntity<FileValidationDTO>(`/files/${fileId}/validate`).then((dto: FileValidationDTO) => {
                return {
                    ...dto.file,
                    log: dto.log,
                }
            }),
    },
};