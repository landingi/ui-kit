/// <reference types="react" />
import { Item } from './Item';
export declare const columns: ({
    header: string;
    render: (data: Item) => JSX.Element;
    identifier: string;
    width: "155px";
    accessor?: undefined;
} | {
    header: string;
    accessor: "name";
    identifier: string;
    width: "280px";
    render?: undefined;
} | {
    header: string;
    accessor: "position";
    identifier: string;
    width: "220px";
    render?: undefined;
} | {
    header: string;
    accessor: "page";
    identifier: string;
    width: "170px";
    render?: undefined;
})[];
