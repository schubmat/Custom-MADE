import {User} from "../services/users";
import {RcFile} from "antd/lib/upload";

//TODO kapsel id von daten _> class Document<T> {id: number, T data}

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<DeepPartial<U>>
        : T[P] extends ReadonlyArray<infer U>
            ? ReadonlyArray<DeepPartial<U>>
            : DeepPartial<T[P]>
};

export interface Project {
    id: number;
    name: string;
    level: ProjectLevel;
    description: string;
    versions: Version[];
}

export enum VisibilityLevel {
    PRIVATE = "PRIVATE",
    PUBLIC = "PUBLIC"
}

export enum ProjectLevel {
    M0,
    M1,
    M2,
}

export interface LanguageServer {
    id: number;
    languageName: string;
    version?: Version;
}

export class Permissions {
    public static OWNER = new Permissions(true, true, true, true, true, true, true, true);
    public static MAINTAINER = new Permissions(true, true, true, true, true, true, true,false);
    public static CONTRIBUTOR = new Permissions(true, true, true, false, false, true, false, false);
    public static REPORTER = new Permissions(true, false, true, false, false, true, false, false);
    public static GUEST = new Permissions(false, false, false, false, false, true, false, false);

    canBrowseFiles: boolean;
    canChangeFiles: boolean;
    canExportFiles: boolean;
    canAddUsers: boolean;
    canDeleteVersion: boolean;
    canUseAsModel: boolean;
    canSetGitRepo: boolean;
    untouchable: boolean;

    constructor(canBrowseFiles: boolean, canChangeFiles: boolean, canExportFiles: boolean, canAddUsers: boolean, canDeleteVersion: boolean, canUseAsModel: boolean, canChangeGitRepo: boolean, isUntouchable: boolean) {
        this.canBrowseFiles = canBrowseFiles;
        this.canChangeFiles = canChangeFiles;
        this.canExportFiles = canExportFiles;
        this.canAddUsers = canAddUsers;
        this.canDeleteVersion = canDeleteVersion;
        this.canUseAsModel = canUseAsModel;
        this.canSetGitRepo = canChangeGitRepo;
        this.untouchable = isUntouchable;
    }

    public isGreaterThan(other: Permissions): boolean {
        return this.contains(other) && !this.equals(other);
    }

    public equals(other: Permissions): boolean {
        return this.canBrowseFiles === other.canBrowseFiles &&
        this.canChangeFiles === other.canChangeFiles &&
        this.canExportFiles === other.canExportFiles &&
        this.canAddUsers === other.canAddUsers &&
        this.canDeleteVersion === other.canDeleteVersion &&
        this.canUseAsModel === other.canUseAsModel &&
        this.canSetGitRepo === other.canSetGitRepo &&
        this.untouchable === other.untouchable;
    }

    public contains(necessary: Permissions): boolean {
        return (this.canBrowseFiles || !necessary.canBrowseFiles)
        && (this.canChangeFiles || !necessary.canChangeFiles)
        && (this.canExportFiles || !necessary.canExportFiles)
        && (this.canAddUsers || !necessary.canAddUsers)
        && (this.canDeleteVersion || !necessary.canDeleteVersion)
        && (this.canUseAsModel || !necessary.canUseAsModel)
        && (this.canSetGitRepo || !necessary.canSetGitRepo)
        && (this.untouchable || !necessary.untouchable);
    }

    public static isGreaterThan(sourceObject: Permissions, otherObject: Permissions): boolean {
        return sourceObject.isGreaterThan(otherObject);
    }

    public static equals(sourceObject: Permissions, otherObject: Permissions): boolean {
        return sourceObject.equals(otherObject);
    }

    public static contains(sourceObject: Permissions, otherObject: Permissions): boolean {
        return sourceObject.contains(otherObject);
    }
}

export interface VersionMembership {
    id: number;
    user: User;
    version?: Version;
    permissions: Permissions;
    gitSettings: GitUserSettings;
}

export interface Version {
    id: number;
    owner: User;
    description: string;
    version: string,
    visibility: VisibilityLevel;
    createdAt: string;
    lastEdited: string;
    fileExtension: string;
    dslExtension: string;
    hasGenerator: boolean;
    project?: Project;
    usersPermissions: Permissions;
    memberships: VersionMembership[];
    usedLanguages: number[];
    grammar?: Version;
    grammarId: number;
    files?: File[];
    valid: boolean;
    /*
     * Id of corresponding language server generated by this version.
     * Is undefined for versions corresponding to M0 projects.
     */
    languageServer?: LanguageServer;
    gitConfiguration: GitConfiguration;
}

export interface File {
    id: number;
    name: string;
    content: string;
    createdAt: string;
    lastEdited: string;
    editorsAsUsers: User[];
    status: FileStatus;
    version?: Version;
}

export enum FileStatus {
    VALID = "VALID",
    INVALID = "INVALID",
    UNCHECKED = "UNCHECKED",
    IN_CONFLICT = "IN_CONFLICT",
}

export interface LSPInstance {
    id: number;
    port: number;
    lspId: number;
}

export interface GitAccount {
    id: number;
    plattformUrl: string;
    name: string;
    public: boolean;
    creator?: User;
    sshKey: RcFile
}

export interface GitConfiguration {
    gitAccount: GitAccount;
    subUrl: string;
    branch: string;
    dir: string;
    commonGitSettings: GitUserSettings | null;
}

export interface GitUserSettings {
    name: string;
    email: string;
}