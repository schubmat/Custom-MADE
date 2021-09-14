import {DefaultRest} from "./index";
import {GitConfiguration, Version} from "../model/types";
import {
    createEntity, deleteEntities,
    deleteEntity,
    fetchEntity,
    fetchFileWithGet,
    fetchFileWithPatch,
    fetchFileWithPost,
    patchEntity,
    postEntity,
    uploadFiles
} from "../services/rest";
import {ROUTES} from "../constants/routes";
import {FetchFileResponse} from "../services/http";
import {FileValidationDTO, restFile, ValidatedFile} from "./File";
import {restVersionMembership} from "./VersionMembership";
import {omitKeys} from "../constants/functions";
import {RcFile} from "antd/lib/upload";

interface VersionValidationDTO {
    version: Required<Version>;
    fileLogs: FileValidationDTO[];
}

export interface ValidatedVersion extends Required<Version> {
    files: ValidatedFile[];
}

export interface VersionRest extends DefaultRest<Version> {
    further: {
        getExports: (id: number, files: number[]) => Promise<FetchFileResponse>,
        getAllExports: (id: number) => Promise<FetchFileResponse>,
        getRaws: (id: number, files: number[]) => Promise<FetchFileResponse>,
        getAllRaws: (id: number) => Promise<FetchFileResponse>,
    }
    modifiers: {
        validate: (id: number) => Promise<ValidatedVersion>,
        validateFiles: (arg: {id: number, files: number[]}) => Promise<ValidatedVersion>,
        uploadFiles: (arg: {id: number, files: RcFile[]}) => Promise<Required<Version>>,
        setFileContents: (args: {versionId: number, files: {id: number, content: string}[]}) => Promise<Required<Version>>,
        deleteFiles: (args: {versionId: number, files: {id: number}[]}) => Promise<Required<Version>>,
        setGitConfig: (args: {id: number, config: GitConfiguration}) => Promise<Required<Version>>,
    }
}

export const restVersion: VersionRest = {
    interface: {
        id: true,
        owner: true,
        description: true,
        version: true,
        visibility: true,
        createdAt: true,
        lastEdited: true,
        fileExtension: true,
        dslExtension: true,
        hasGenerator: true,
        project: true,
        usersPermissions: true,
        memberships: restVersionMembership,
        usedLanguages: true,
        grammar: true,
        grammarId: true,
        files: restFile,
        valid: true,
        languageServer: true,
        gitConfiguration: true
    },
    get: id => fetchEntity<Version>(`/versions/${id}`),
    getAll: () => Promise.resolve([]),
    create: v => {
        if (!v.project)
            throw new Error("No project specified");
        if (!v.project.id)
            return createEntity<Version>(v, "/versions");
        return createEntity<Version>(omitKeys<Version>(v, ["project"]), `/projects/${v.project.id}/versions`);
    },
    delete: v => {
        return deleteEntity<Version>(`/versions/${v.id}`);
    },
    put: v => {throw new Error("operation is not supported")},
    further: {
        getExports: (id, files) => fetchFileWithPost(`${ROUTES.VERSIONS}/${id}/export`, files.map(id => {return {id: id};})),
        getAllExports: (id) => fetchFileWithGet(`${ROUTES.VERSIONS}/${id}/export`),
        getRaws: (id, files) => fetchFileWithPost(`${ROUTES.VERSIONS}/${id}/files`, files.map(id => {return {id: id};})),
        getAllRaws: (id) => fetchFileWithGet(`${ROUTES.VERSIONS}/${id}/files`),
        // setGitConfig: (id, config) => patchField<Version, GitConfiguration>(config, `${ROUTES.VERSIONS}/${id}/git`)
    },
    modifiers: {
        uploadFiles: args => uploadFiles<Required<Version>>(`${ROUTES.VERSIONS}/${args.id}/files/upload`, args.files),
        validate: (id) => patchEntity<VersionValidationDTO>(`${ROUTES.VERSIONS}/${id}/validate`).then((dto: VersionValidationDTO) => {
            return {
                ...dto.version,
                files: dto.fileLogs.map(fileLog => {return {...fileLog.file, log: fileLog.log}}),
            };
        }),
        validateFiles: args => postEntity<VersionValidationDTO>(`${ROUTES.VERSIONS}/${args.id}/validate`, args.files.map(id => {return {id: id};})).then((dto: VersionValidationDTO) => {
            return {
                ...dto.version,
                files: dto.fileLogs.map(fileLog => {return {...fileLog.file, log: fileLog.log}}),
            };
        }),
        setFileContents: args => patchEntity(`${ROUTES.VERSIONS}/${args.versionId}/files`, args.files),
        deleteFiles: args => deleteEntities(`${ROUTES.VERSIONS}/${args.versionId}/files`, args.files),
        setGitConfig: args => patchEntity<Required<Version>>(`${ROUTES.VERSIONS}/${args.id}/git`, args.config),
    },
};

export const restVersionFromFile = {...restVersion};
restVersionFromFile.get = id => restFile.further.fetchVersion(id);