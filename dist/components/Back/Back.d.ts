import { FC, ReactNode } from 'react';
export interface BackProps {
    className?: string | string[];
    url?: string;
    content?: ReactNode;
    label?: string;
    onClick?: () => void;
}
export declare const Back: FC<BackProps>;
