/// <reference types="react" />
import type { ItemBase, TableProps } from './types';
export declare const Table: <Item extends ItemBase>({ data, columns, rowActions, options, selectAll, isSelectedAll, isSelectedAny, hasSelect, isSelected, select, selected, i18n, filtersAndSorters, hasHeader, isLoading, emptyMessage }: TableProps<Item>) => JSX.Element;
