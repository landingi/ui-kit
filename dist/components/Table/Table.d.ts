/// <reference types="react" />
import type { ItemBase, TableProps } from './types';
export declare const Table: <Item extends ItemBase>({ name, data, columns, rowActions, options, selectAll, isSelectedAll, isSelectedAny, hasSelect, isSelected, select }: TableProps<Item>) => JSX.Element;
