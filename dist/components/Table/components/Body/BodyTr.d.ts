/// <reference types="react" />
import type { BodyTrProps, ItemBase } from '@components/Table/types';
export declare const BodyTr: <Item extends ItemBase>({ columns, item, rowActions, hasSelect, isSelected, select, handleRefresh, externalBorder, hasStyledFirstRow }: BodyTrProps<Item>) => JSX.Element;
