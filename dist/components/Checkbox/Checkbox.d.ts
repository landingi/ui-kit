import { FC, ReactEventHandler } from 'react';
interface CheckboxProps {
    onChange?: ReactEventHandler<HTMLInputElement>;
    className?: string | string[];
    checked: boolean;
    disabled?: boolean;
    formikKey?: string;
    tableDeselect?: boolean;
    'data-testid'?: string;
    backgroundColor?: 'color-1' | 'color-2' | 'color-3' | 'color-4' | 'color-5';
}
export declare const Checkbox: FC<CheckboxProps>;
export {};
