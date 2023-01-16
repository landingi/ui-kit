import { FC, FocusEventHandler, ReactEventHandler } from 'react';
interface ToggleProps {
    name?: string;
    onChange?: ReactEventHandler<HTMLInputElement>;
    onBlur: FocusEventHandler<HTMLInputElement>;
    label: string;
    id: string;
    className?: string | string[];
    checked: boolean;
    disabled?: boolean;
    formikKey?: string;
    table?: boolean;
    tableDeselect?: boolean;
    'data-testid'?: string;
}
declare const Toggle: FC<ToggleProps>;
export default Toggle;
