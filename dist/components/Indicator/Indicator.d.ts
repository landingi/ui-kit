import { FC, MouseEventHandler, ReactNode } from 'react';
export interface IndicatorProps {
    children: ReactNode;
    className?: string | string[];
    content?: string;
    isAlert?: boolean;
    variant?: 'warning' | 'alert';
    onClick?: MouseEventHandler<HTMLSpanElement>;
}
export declare const Indicator: FC<IndicatorProps>;
