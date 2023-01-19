import { FC, MouseEventHandler, ReactNode } from 'react';
interface IndicatorProps {
    children: ReactNode;
    className?: string | string[];
    content?: string;
    isAlert?: boolean;
    onClick?: MouseEventHandler<HTMLSpanElement>;
}
export declare const Indicator: FC<IndicatorProps>;
export {};
