import { FC } from 'react';
import { Mask } from 'react-text-mask';
export interface MaskedInputProps {
    className?: string | string[];
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    type?: React.HTMLInputTypeAttribute;
    name?: string;
    disabled?: boolean;
    readonly?: boolean;
    value?: string | number;
    autoFocus?: boolean;
    maxLength?: number;
    mask: Mask | ((value: string) => Mask);
    guide?: boolean;
    focused?: string | boolean;
    i18n?: {
        placeholder?: string;
        label?: string;
    };
    alwaysShowLabel?: boolean;
    required?: boolean;
}
export declare const MaskedInput: FC<MaskedInputProps>;
