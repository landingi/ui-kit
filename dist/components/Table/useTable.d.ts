/// <reference types="react" />
import { ItemBase, UseTableProps } from './types';
export declare const useTable: <Item extends ItemBase>({ data, options, pagination, name, constantPageLimit, ...rest }: UseTableProps<Item>) => {
    Table: () => JSX.Element;
    pageIndex: number;
    pageLimit: number;
    refresh: boolean;
};
