import { FC } from 'react';
export interface TextareaProps {
    className?: string | string[];
    name: string;
    id: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    variant?: 'default' | 'codearea';
    size?: 'tiny' | 'small' | 'medium';
    i18n?: {
        placeholder?: string;
        label?: string;
        description?: string;
    };
    hasResize?: boolean;
    maxHeight?: number;
    disabled?: boolean;
    errors?: Record<string, string>;
    touched?: Record<string, boolean>;
    maxLength?: number;
    dir?: 'rtl' | 'ltr' | 'auto';
}
export declare const Textarea: FC<TextareaProps>;
