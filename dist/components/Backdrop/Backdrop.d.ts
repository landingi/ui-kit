import { FC } from 'react';
export interface BackdropProps {
    className?: string | string[];
    onClick?: () => void;
    zIndex?: '4' | '6' | '8';
    customZIndex?: number;
}
export declare const Backdrop: FC<BackdropProps>;
