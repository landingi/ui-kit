import { FC, MouseEventHandler, ReactNode } from 'react';
export interface IndicatorProps {
    children: ReactNode;
    className?: string | string[];
    content?: string;
    isAlert?: boolean;
    variant?: 'warning' | 'alert';
    position?: {
        top?: number | string;
        right?: number | string;
        bottom?: number | string;
        left?: number | string;
    };
    onClick?: MouseEventHandler<HTMLSpanElement>;
}
export declare const Indicator: FC<IndicatorProps>;
