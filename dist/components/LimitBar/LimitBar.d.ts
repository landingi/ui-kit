import { FC } from 'react';
type LimitBarPadding = 'none' | 'tiny' | 'small' | 'medium' | 'regular';
export interface LimitBarProps {
    className?: string;
    padding?: LimitBarPadding;
    limit: number;
    quantity: number;
    limitText: string;
    tooltip?: string;
    regularLimit?: number;
    tooltipInQuantity?: string;
}
export declare const LimitBar: FC<LimitBarProps>;
export {};
