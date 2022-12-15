/// <reference types="react" />
import type { HeaderProps, ItemBase } from '../../types';
export declare const Header: <Item extends ItemBase>({ columns, options, selectAll, isSelectedAll, isSelectedAny, i18n, selected, filtersAndSorters, hasHeader }: HeaderProps<Item>) => JSX.Element;
