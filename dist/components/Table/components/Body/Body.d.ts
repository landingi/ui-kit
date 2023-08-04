/// <reference types="react" />
import type { BodyProps, ItemBase } from '@components/Table/types';
export declare const Body: <Item extends ItemBase>({ data, columns, rowActions, hasSelect, isSelected, select, handleRefresh, externalBorder, isStyledFirstRow }: BodyProps<Item>) => JSX.Element;
