import { FC } from 'react';
interface BackdropProps {
    className?: string | string[];
    onClick?: () => void;
    zIndex?: '4' | '6' | '8';
}
export declare const Backdrop: FC<BackdropProps>;
export {};
