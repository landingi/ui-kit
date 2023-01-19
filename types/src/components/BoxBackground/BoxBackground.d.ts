import { FC, ReactNode } from 'react';
interface BoxBackgroundProps {
    className?: string | string[];
    children: ReactNode;
    variant: 'success' | 'warning' | 'alert' | 'progress' | 'info';
}
export declare const BoxBackground: FC<BoxBackgroundProps>;
export {};
