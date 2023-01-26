import { FC, ReactNode } from 'react';
export interface OverflowTooltipProps {
    content: string;
    placement?: 'top' | 'left' | 'right' | 'bottom';
    length?: number;
    children?: ReactNode;
    className?: string | string[];
}
export declare const OverflowTooltip: FC<OverflowTooltipProps>;
