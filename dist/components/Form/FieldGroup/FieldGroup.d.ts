import { FC, ReactNode } from 'react';
interface FieldGroupProps {
    children: ReactNode;
    name: string;
    label?: string;
    errors?: {
        [key: string]: string;
    };
    touched?: {
        [key: string]: boolean;
    };
}
export declare const FieldGroup: FC<FieldGroupProps>;
export {};
