/// <reference types="react" />
import type { ItemBase, TableProps } from './types';
export declare const Table: <Item extends ItemBase>({ name, data, columns, rowActions }: TableProps<Item>) => JSX.Element;
