import {fetchAPI, fetchAuthAPI, fetchAuthGetFile, FetchFileResponse} from "../http";
import {DeepPartial} from "../../model/types";
import {ROUTES} from "../../constants/routes";
import {Authentication} from "../../gui/shared/contexts/Authentication";
import {User} from "../users";
import {File} from "../../model/types";


export const restSignUp = (username: string, password: string, email: string): Promise<User> => {
    const request = {
        username: username,
        password: password,
        email: email,
    };
    return fetchAPI("auth/signup", {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(request)
    });
};

export const restLogin = (username: string, password: string): Promise<Authentication> => {
    const credentials = {
        username: username,
        password: password,
    };
    return fetchAPI("/auth/signin", {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(credentials)
    });
};

export const createEntity = <T>(entity: DeepPartial<T>, url: string): Promise<Required<T>> => {
    return fetchAuthAPI(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(entity)
    });
};
export const createEntityIncludingFile = <T>(entity: any, file: any, url: string): Promise<Required<T>> => {
    const formData = new FormData();
    formData.append('file', file);
    Object.keys(entity).forEach(key => formData.append(key.toString(), entity[key]));
    return fetchAuthAPI(url, {
        method: 'POST',
        body: formData
    });
};
export const updateEntity = <T>(entity: Partial<T>, url: string): Promise<Required<T>> => {
    return fetchAuthAPI(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(entity)
    });
};
export const patchField = <EntityType, FieldType>(newVal: FieldType, url: string): Promise<EntityType> => {
    return fetchAuthAPI(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVal)
    });
};
export const deleteEntity = <T>(url: string): Promise<Required<T>> => {
    return fetchAuthAPI(url, {
        method: 'DELETE'
    });
};
export const deleteEntities = <T>(url: string, request: any): Promise<Required<T>> => {
    return fetchAuthAPI(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request)
    });
};
export const uploadFiles = <T>(url: string, files: any[]): Promise<T> => {
    const formData = new FormData();
    files.forEach(file => {
        formData.append('files[]', file);
    });
    return fetchAuthAPI(url, {
        method: 'POST',
        body: formData
    });
};
export const fetchEntity = <T>(url: string): Promise<Required<T>> => {
    return fetchAuthAPI(url, {
        method: "GET"
    });
};
export const fetchEntities = <T>(url: string): Promise<T[]> => {
    return fetchAuthAPI(url, {
        method: "GET",
    });
};
export const fetchFileWithPost = (url: string, request: any): Promise<FetchFileResponse> => {
    return fetchAuthGetFile(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request)
    });
};
export const fetchFileWithGet = (url: string,): Promise<FetchFileResponse> => {
    return fetchAuthGetFile(url, {
        method: 'GET',
    });
};
export const patchEntity = <T>(url: string, request?: any): Promise<T> => {
    const content = {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),};
    const method = "PATCH";
    return fetchAuthAPI(url, request ? {...content, method} : {method});
};
export const postEntity = <T>(url: string, request?: any): Promise<T> => {
    const content = {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request)};
    const method = "POST";
    return fetchAuthAPI(url, request ? {...content, method} : {method});
};
export const fetchFileWithPatch = (url: string, request?: any): Promise<FetchFileResponse> => {
    const content = {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),};
    const method = "PATCH";
    return fetchAuthGetFile(url, request ? {...content, method} : {method});
};
export const patchFileContent = (fileId: number, fileContent: string): Promise<File> => {
    return fetchAuthAPI(`${ROUTES.FILES}/${fileId}/content`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: fileContent
    });
};