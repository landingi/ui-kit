import { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, ReactNode } from 'react';
export interface InputProps {
    className?: string | string[];
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    type?: 'text' | 'number' | 'password';
    name?: string;
    disabled?: boolean;
    readonly?: boolean;
    i18n?: {
        label?: string;
        placeholder?: string;
        description?: string | ReactNode;
    };
    value?: string | number;
    autoFocus?: boolean;
    maxLength?: number;
    required?: boolean;
    focused?: boolean;
    tooltip?: string;
    min?: number;
    max?: number;
    background?: 'white' | 'transparent';
    hideArrows?: boolean;
    alwaysShowLabel?: boolean;
    defaultValue?: string;
    variant?: 'table';
    form?: boolean;
    dir?: 'rtl' | 'ltr' | 'auto';
    ['data-testid']?: string;
}
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
