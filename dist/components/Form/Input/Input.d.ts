import { ChangeEventHandler, FC, FocusEventHandler, KeyboardEventHandler } from 'react';
interface InputProps {
    className?: string | string[];
    field: {
        name: string;
        value: string | number;
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
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    type?: 'text' | 'number' | 'password';
    disabled?: boolean;
    i18n?: {
        label?: string;
        placeholder?: string;
        description?: string;
    };
    autoFocus?: boolean;
    maxLength?: number;
    required?: boolean;
    focused?: boolean;
    tooltip?: string;
    background?: 'white' | 'transparent';
    hideArrows?: boolean;
    alwaysShowLabel?: boolean;
    variant?: 'table';
    ['data-testid']?: string;
}
declare const Input: FC<InputProps>;
export default Input;
