import { ChangeEventHandler, FC, FocusEventHandler, ReactNode } from 'react';
export interface FormikCheckboxProps {
    className?: string | string[];
    field: {
        name: string;
        value: boolean;
        onChange: ChangeEventHandler<HTMLInputElement>;
        onBlur: FocusEventHandler<HTMLInputElement>;
    };
    form: {
        errors: {
            [key: string]: string;
        };
        touched: {
            [key: string]: boolean;
        };
    };
    id: string;
    label?: ReactNode;
    type?: 'text' | 'number' | 'password';
}
export declare const Checkbox: FC<FormikCheckboxProps>;
