import React from "react";
import {ProviderExoticComponent} from "react";


export type Setable<T> = [T, (t: T) => void];

export const withProps = (props: any, Provider: ProviderExoticComponent<any>,) => (
    <Provider {...props}/>
);