/// <reference types="react" />
import { ItemBase, UseTableProps } from './types';
export declare const useTable: <Item extends ItemBase>({ data, options, ...rest }: UseTableProps<Item>) => {
    Table: () => JSX.Element;
    selected: Item["identifier"][];
    page: number;
    filters: never[];
    sort: never[];
};
