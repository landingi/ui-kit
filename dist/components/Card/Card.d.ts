import { FC, ReactElement } from 'react';
interface CardProps {
    className?: string | string[];
    children: ReactElement;
    variant: 'alert' | 'warning' | 'success';
}
export declare const Card: FC<CardProps>;
export {};
