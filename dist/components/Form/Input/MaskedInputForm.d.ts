import { FC } from 'react';
import { Mask } from 'react-text-mask';
export interface MaskedInputFormProps {
    className?: string | string[];
    field: {
        name: string;
        value: string | number;
        onChange: React.ChangeEventHandler<HTMLInputElement>;
        onBlur: React.FocusEventHandler<HTMLInputElement>;
    };
    form?: {
        errors: {
            [key: string]: string;
        };
        touched: {
            [key: string]: boolean;
        };
    };
    type?: React.HTMLInputTypeAttribute;
    disabled?: boolean;
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
export declare const MaskedInputForm: FC<MaskedInputFormProps>;
