import { FC, ReactNode } from 'react';
interface AlertProps {
    children: ReactNode;
    className?: string | string[];
    type?: 'info' | 'success' | 'warning' | 'alert';
}
export declare const Alert: FC<AlertProps>;
export {};
