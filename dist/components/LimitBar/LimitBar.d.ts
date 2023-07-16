import { FC } from 'react';
declare type LimitBarPadding = 'none' | 'tiny' | 'small' | 'medium' | 'regular';
export interface CommonLimitBarProps {
    padding?: LimitBarPadding;
    limit: number;
    quantity: number;
    regularLimit?: number;
    limitText: string;
    tooltip?: string;
    tooltipInQuantity?: string;
    shouldShowRegularLimit?: boolean;
    className?: string;
}
declare type ShowRegulatLimitProps = {
    regularLimit: number;
    tooltipInQuantity: string;
    shouldShowRegularLimit: boolean;
};
export declare type LimitBarProps = ShowRegulatLimitProps & CommonLimitBarProps;
export declare const LimitBar: FC<LimitBarProps>;
export {};
