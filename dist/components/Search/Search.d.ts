import { ChangeEvent, FC, KeyboardEvent, ReactNode } from 'react';
export interface SearchProps {
    className?: string | string[];
    variant?: 'input' | 'button';
    onChange?: (event?: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event?: KeyboardEvent<HTMLInputElement>) => void;
    autoFocus?: boolean;
    children?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    onSubmit?: (value?: string) => void;
    onClean?: () => void;
    i18n?: {
        placeholder?: string;
        label?: string;
    };
    tag?: 'div' | 'form';
    onProtectedSubmit?: (value?: string) => void;
    submitEmptyOnBlur?: boolean;
    defaultValue?: string;
    searchIcon?: string | null;
    isDisabled?: boolean;
}
export declare const Search: FC<SearchProps>;
