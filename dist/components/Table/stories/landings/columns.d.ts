/// <reference types="react" />
import { Item } from './Item';
export declare const columns: {
    header: string;
    identifier: string;
    render: (info: Item) => JSX.Element;
    width: "100%";
}[];
