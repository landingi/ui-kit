import { FC, ReactEventHandler } from 'react';
interface CheckboxProps {
    onChange?: ReactEventHandler<HTMLInputElement>;
    className?: string | string[];
    checked: boolean;
    disabled?: boolean;
    formikKey?: string;
    table?: boolean;
    tableDeselect?: boolean;
    'data-testid'?: string;
}
export declare const Checkbox: FC<CheckboxProps>;
export {};
