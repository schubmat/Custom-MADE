import {message} from "antd";

export const showError = (error: Error) => {
    message.error(error.message);
};

export const omitKeys = <T>(obj: any, omitKeys: string[]): Partial<T> => {
    const result: any = {};
    Object.keys(obj)
        .filter(key => !omitKeys.find(k => k == key))
        .forEach(key => result[key] = obj[key]);
    return result;
};

export const trimDirNames = (dirs: string[]) => {
    return dirs.map(value => value.charAt(0) == "/" ? value.substr(0, value.length) : value)
        .map(value => value.charAt(value.length - 1) == "/" ? value.substr(0, value.length - 1) : value)
};