import { FC, FocusEventHandler, ReactEventHandler } from 'react';
interface ToggleProps {
    name?: string;
    onChange?: ReactEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    label?: Node | string;
    id: string;
    className?: string | string[];
    checked: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    formikKey?: string;
    table?: boolean;
    tableDeselect?: boolean;
    'data-testid'?: string;
    variant?: 'small';
    color?: 'success' | 'brand';
}
declare const Toggle: FC<ToggleProps>;
export default Toggle;
