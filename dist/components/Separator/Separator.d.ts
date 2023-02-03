import { FC, ReactNode } from 'react';
export interface SeparatorProps {
    className?: string | string[];
    children: ReactNode;
    size?: 'medium';
    color?: 'color-4';
}
export declare const Separator: FC<SeparatorProps>;
