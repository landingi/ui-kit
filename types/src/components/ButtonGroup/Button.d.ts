import { FC, ReactNode } from 'react';
export interface ButtonProps {
    children: ReactNode;
    id: string;
    isDisabled?: boolean;
}
export declare const Button: FC<ButtonProps>;
