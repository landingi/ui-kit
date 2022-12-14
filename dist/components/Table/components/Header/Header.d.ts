/// <reference types="react" />
import type { HeaderProps, ItemBase } from '../../types';
export declare const Header: <Item extends ItemBase>({ columns, selectOptions, selectAll, isSelectedAll, isSelectedAny, selected }: HeaderProps<Item>) => JSX.Element;
