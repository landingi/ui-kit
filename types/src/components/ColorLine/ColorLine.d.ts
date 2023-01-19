import { FC } from 'react';
interface ColorLineProps {
    className?: string | string[];
    variant: 'alert' | 'warning' | 'success' | 'info';
    alignment?: 'vertical' | 'horizontal';
}
export declare const ColorLine: FC<ColorLineProps>;
export {};
