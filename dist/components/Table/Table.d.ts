import type { ItemBase, TableProps } from './types';
export declare const Table: <Item extends ItemBase>({ name, data, columns, rowActions, options, hasSelect, i18n, filtersAndSorters, hasHeader, isLoading, emptyMessage, pageCount, setPageLimit, pageLimit, constantPageLimit, handleRefresh, pagination, externalBorder, extraHeaderContent, selectAll, isSelectedAll, isSelectedAny, selected, isSelected, select, hasStyledFirstRow, hasCustomPageLimit }: TableProps<Item>) => import("react/jsx-runtime").JSX.Element;
