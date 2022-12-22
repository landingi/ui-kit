/// <reference types="react" />
import type { ItemBase, TableProps } from './types';
export declare const Table: <Item extends ItemBase>({ name, data, columns, rowActions, options, hasSelect, i18n, filtersAndSorters, hasHeader, isLoading, emptyMessage, pageCount, pageIndex, setPageIndex, setPageLimit, pageLimit, constantPageLimit, handleRefresh }: TableProps<Item>) => JSX.Element;
