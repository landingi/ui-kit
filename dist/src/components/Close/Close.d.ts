import { FC, MouseEventHandler } from 'react';
interface CloseProps {
    className?: string | string[];
    onClick?: MouseEventHandler<HTMLSpanElement>;
    iconName?: string;
    iconColor?: string;
}
export declare const Close: FC<CloseProps>;
export {};
