import { FC } from 'react';
export interface LimitSmallProps {
    className?: string | string[];
    padding?: 'none' | 'tiny' | 'small' | 'medium';
    limit: number;
    quantity: number;
    limitText: string;
}
export declare const LimitSmall: FC<LimitSmallProps>;
