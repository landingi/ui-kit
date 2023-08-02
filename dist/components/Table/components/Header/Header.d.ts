/// <reference types="react" />
import type { HeaderProps, ItemBase } from '@components/Table/types';
export declare const Header: <Item extends ItemBase>({ columns, options, selectAll, isSelectedAll, isSelectedAny, i18n, selected, filtersAndSorters, hasHeader, handleRefresh, externalBorder, extraHeaderContent, hideOptions }: HeaderProps<Item>) => JSX.Element;
