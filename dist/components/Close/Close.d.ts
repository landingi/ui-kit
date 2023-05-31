import { FC, MouseEventHandler } from 'react';
interface CloseProps {
    className?: string | string[];
    onClick?: MouseEventHandler<HTMLSpanElement>;
    iconName?: string;
    size?: 10 | 12 | 14 | 32;
    iconColor?: string;
}
export declare const Close: FC<CloseProps>;
export {};
