import {RestApi} from "../rest_api";
import {isPrimitive, getStateEntity, State} from "./stateEntity";
import {DeepPartial} from "../model/types";

type ItemType<T> = T extends boolean | number | string ? T[] : State<T>;

export type ArrayState<T> = {
    getEntityArray: () => T[];
    items: ItemType<T>[];
    get: (id: number) => Promise<T>;
    getAll: () => Promise<T[]>;
    add: (x: DeepPartial<T>) => Promise<Required<T>>;
    put: (x: Partial<T>) => Promise<Required<T>>;
    remove: (x: DeepPartial<T>) => Promise<Required<T>>;
} & Pick<RestApi<T>, 'further'>

export const getArrayState = <T>(arry: T[], setState: (arry: ArrayState<T>) => void, rest: RestApi<T>): ArrayState<T> => {
    return new ArrayStateClass<T>(arry, setState, rest).state;
};

class ArrayStateClass<T> {
    private readonly setState: (x: ArrayState<T>) => void;
    private readonly rest: RestApi<T>;
    state: ArrayState<T>;

    constructor(children: any[], setState: (x: ArrayState<T>) => void, rest: RestApi<T>) {
        this.setState = setState;
        this.rest = rest;
        const isPrimitiveArray = !rest || children.every(child => isPrimitive(child));
        let items: ItemType<T>[];
        if (isPrimitiveArray)
            items = [...children];
        else
            // @ts-ignore
            items = children.map(item => getStateEntity<T>(item, this.putMutableStateItem));
        this.state = {
            further: rest ? rest.further : {},
            items: items,
            getEntityArray: this.getEntityArray,
            get: this.get,
            getAll: this.getAll,
            add: this.add,
            put: this.put,
            remove: this.remove
        }
    }

    update(newItems: ItemType<T>[]): void {
        this.state = {...this.state, items: newItems};
        this.setState(this.state);
    }

    putMutableStateItem = (item: State<T>): void => {
        let items: ItemType<T>[] = this.state.items.filter((i: any) => i.id != item.id);
        // @ts-ignore
        items = [...items, item];
        this.update(items);
    };

    getEntityArray = (): T[] => {
        const items = this.state.items;
        // @ts-ignore
        return items.map(item => item.getEntity ? item.getEntity() : item);
    };
    get = (id: number): Promise<Required<T>> => {
        // @ts-ignore
        return this.rest.get(id).then(item => {
            let items = this.state.items;
            if (isPrimitive(item)) {
                items = [...items, item];
            } else {
                items = items.filter((i: any) => i.id != item.id);
                // @ts-ignore
                items = [...items, getStateEntity(item, this.putMutableStateItem)];
            }
            this.update(items);
            return item;
        });
    };

    getAll = (): Promise<T[]> => {
        // @ts-ignore
        return this.rest.getAll().then((items: any[]) => {
            let newItems = [];
            for (let newItem of items) {
                newItems.push(getStateEntity(newItem, this.putMutableStateItem));
            }
            // @ts-ignore
            this.update(newItems);
            return items;
        });
    };
    put = (item: Partial<T>): Promise<Required<T>> => {
        // @ts-ignore
        return this.rest.put(item).then((newItem: any) => {
            this.putMutableStateItem(getStateEntity(newItem, this.putMutableStateItem));
            return newItem;
        });
    };
    add = (item: DeepPartial<T>): Promise<Required<T>> => {
        if (isPrimitive(item)) {
            const items = [...this.state.items, item];
            // @ts-ignore
            this.update(items);
            // @ts-ignore
            return Promise.resolve(item);
        }
        // @ts-ignore
        return this.rest.create(item).then( (newItem: any) => {
            const items = [...this.state.items, getStateEntity(newItem, this.putMutableStateItem)];
            // @ts-ignore
            this.update(items);
            return newItem;
        });
    };
    remove = (oldItem: any): Promise<Required<T>> => {
        if (isPrimitive(oldItem)) {
            const items = this.state.items.filter((item: any) => item != oldItem);
            this.update(items);
            return Promise.resolve(oldItem);
        }
        // @ts-ignore
        return this.rest.delete(oldItem).then((deletedItem: any) => {
            const items = this.state.items.filter((item: any) => item.id != deletedItem.id);
            this.update(items);
            return deletedItem;
        });
    };
}