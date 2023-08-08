import { FC, ReactEventHandler } from 'react';
interface CheckboxProps {
    onChange?: ReactEventHandler<HTMLInputElement>;
    className?: string | string[];
    checked: boolean;
    disabled?: boolean;
    formikKey?: string;
    tableDeselect?: boolean;
    'data-testid'?: string;
    backgroundColor?: string;
}
export declare const Checkbox: FC<CheckboxProps>;
export {};
