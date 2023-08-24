import { FC, ReactNode } from 'react';
export interface AlertProps {
    children: ReactNode;
    className?: string | string[];
    type?: 'info' | 'success' | 'warning' | 'alert';
    customIcon?: string | 'no-icon';
}
export declare const Alert: FC<AlertProps>;
