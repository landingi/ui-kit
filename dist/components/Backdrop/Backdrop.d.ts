import { FC } from 'react';
export interface BackdropProps {
    className?: string | string[];
    onClick?: () => void;
    zIndex?: '4' | '6' | '8';
}
export declare const Backdrop: FC<BackdropProps>;
