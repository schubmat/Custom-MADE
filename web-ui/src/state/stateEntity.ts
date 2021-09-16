import {getRestApi, RestApi} from "../rest_api";
import {ArrayState, getArrayState} from "./stateArray";
import {DeepPartial, GitUserSettings, Version} from "../model/types";

type onlyPrimitiveKeys<T> = ({[P in keyof T]: T[P] extends boolean | number | string ? P : never})[keyof T];
export type onlyPrimitives<T> = Pick<T, onlyPrimitiveKeys<T>>;
export type onlyObjects<T> = Omit<T, onlyPrimitiveKeys<T> | onlyArrayKeys<T>>;
type onlyObjectStates<T> = {[P in keyof onlyObjects<T>]: State<T[P]>}
type onlyArrayKeys<T> = ({[P in keyof T]: [] extends T[P] ? P : never})[keyof T];
type onlyArrays<T> = Pick<T, onlyArrayKeys<T>>;
export type onlyArrayTypes<T> = ({[P in keyof onlyArrays<T>]: T[P] extends (infer U)[] ? U : never});
type arrayStates<T> = {
    [P in keyof T]: ArrayState<T[P]>;
};

type onlyPatchMethodKeys<F, T> = ({[P in keyof F]: F[P] extends (...args: any) => Promise<T> ? P : never})[keyof F];
type onlyPatchMethods<F, T> = Pick<F, onlyPatchMethodKeys<F, T>>;

export type State<T> =
    onlyPrimitives<T> &
    onlyObjectStates<onlyObjects<T>> &
    arrayStates<onlyArrayTypes<T>> & {
    id: number;
    update: () => Promise<T>;
    getEntity: () => T;
} &
    Pick<RestApi<T>, 'put' | 'further'> &
    onlyPatchMethods<RestApi<T>['modifiers'], T>

export const isPrimitive = (value: any): boolean => {
    switch (typeof value) {
        case 'boolean':
        case 'number':
        case 'string':
            return true;
    }
    return false;
    // return value !== Object(value);
};


class StateClass<T> {
    private readonly entity: any;
    private readonly setState: (x: State<T>) => void;
    private readonly rest: RestApi<T>;
    state: State<T>;

    constructor(entity: T, setState: (x: State<T>) => void) {
        this.entity = entity;
        this.setState = setState;
        this.rest = getRestApi<T>(entity);
        const modifiers: any = {};
        if (this.rest.modifiers) {
            for (let key of Object.keys(this.rest.modifiers)) {
                if (typeof this.rest.modifiers[key] === 'function') {
                    modifiers[key] = (arg: any) =>
                        this.rest.modifiers[key](arg).then((newEntity: T) => {
                            return this._set(newEntity, true)
                        });
                }
            }
        }
        // @ts-ignore
        this.state = {
            further: this.rest.further,
            getEntity: this.getEntity,
            put: (newValues: Partial<T>) =>
                // @ts-ignore
                this.rest.put(newValues).then((newEntity: T) => {
                    return this._set(newEntity, true)}),
            // @ts-ignore
            update: () =>
                // @ts-ignore
                this.rest.get(entity.id).then((newEntity: T) => {
                    return this._set(newEntity, true)}),
            ...modifiers,
        };
        this._set(entity, false);
    }

    setMutableStateAttribute = (key: string, newValue: State<any> | ArrayState<any>): void => {
        const mother: any = {};
        mother[key] = newValue;
        this.state = {...this.state, ...mother};
        this.setState(this.state);
    };

    getEntity = (): T => {
        const result: any = {};
        for (let key of Object.keys(this.entity)) {
            // @ts-ignore
            const stateVal = this.state[key];
            if (!(key in this.state))
                result[key] = stateVal;
            else if (stateVal.getEntity)
                result[key] = stateVal.getEntity();
            else if (stateVal.getEntityArray)
                result[key] = stateVal.getEntityArray();
            else
                result[key] = stateVal;
        }
        return result;
    };

    _set = (newValues: Partial<T> | any, rerender: boolean) => {
        let newState: any = {...this.state};
        for (let key of Object.keys(newValues)) {
            if (!(key in this.entity) || typeof this.entity[key] === 'function')
                continue;
            if (isPrimitive(newValues[key])) {
                newState[key] = newValues[key];
            } else {
                if (Array.isArray(newValues[key])) {
                    newState[key] = getArrayState<any>(
                        newValues[key],
                        x => this.setMutableStateAttribute(key, x),
                        // @ts-ignore
                        this.rest.interface[key]);
                } else {
                    if (newValues[key])
                        newState[key] = getStateEntity(newValues[key], x => this.setMutableStateAttribute(key, x));
                }
            }
        }
        this.state = newState;
        if (rerender)
            this.setState(newState);
        return newValues;
    };
}

export const getStateEntity = <T>(entity: any, setState: (x: State<T>) => void): State<T> => {
    return new StateClass<T>(entity, setState).state;
};
