import { FC } from 'react';
declare type LimitBarPadding = 'none' | 'tiny' | 'small' | 'medium' | 'regular';
export interface LimitBarProps {
    padding?: LimitBarPadding;
    limit: number;
    quantity: number;
    regularLimit?: number;
    limitText: string;
    tooltip?: string;
    tooltipInQuantity?: string;
    className?: string;
}
export declare const LimitBar: FC<LimitBarProps>;
export {};
