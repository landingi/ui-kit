import { FC } from 'react';
declare type LimitBarPadding = 'none' | 'tiny' | 'small' | 'medium';
export interface LimitBarProps {
    padding: LimitBarPadding;
    limit: number;
    quantity: number;
    regularLimit: number;
    limitText: string;
    tooltip: string;
    tooltipInQuantity: string;
    shouldShowRegularLimit: boolean;
    className: string;
}
export declare const LimitBar: FC<LimitBarProps>;
export {};
