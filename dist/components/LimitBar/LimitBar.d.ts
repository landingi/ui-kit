import { FC } from 'react';
export interface LimitBarProps {
    padding: string;
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
