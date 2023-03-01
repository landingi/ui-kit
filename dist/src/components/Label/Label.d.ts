import { FC, ReactNode } from 'react';
interface LabelProps {
    children: ReactNode;
    className?: string | string[];
    id?: string;
    isToggle?: boolean;
    toggle?: boolean;
    padding?: 'default' | 'none';
}
export declare const Label: FC<LabelProps>;
export {};
