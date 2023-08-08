import { ItemBase, UseTableProps } from './types';
export declare const useTable: <Item extends ItemBase>({ data, options, pagination, name, constantPageLimit, i18n, ...rest }: UseTableProps<Item>) => {
    Table: () => import("react/jsx-runtime").JSX.Element;
    pageLimit: number;
    refresh: boolean;
    selected: Item["identifier"][];
};
