import { FC, MouseEvent, ReactNode } from 'react';
export type ButtonVariant = 'primary' | 'secondary' | 'secondary-outlined' | 'dropdown' | 'transparent' | 'icon' | 'icon-transparent' | 'icon-transparent-hover' | 'alert' | 'clean' | 'tabs' | 'transparent-blue' | 'dropdown-element' | 'action' | 'white' | 'black' | 'publish' | 'switcher-brand';
export interface ButtonProps {
    id?: string;
    className?: string | string[];
    tag?: 'button' | 'a';
    title?: string;
    type?: 'button' | 'submit' | 'reset';
    href?: string;
    size?: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'input';
    variant?: ButtonVariant;
    align?: 'left' | 'center' | 'right';
    target?: '_self' | '_blank' | '_parent' | '_top';
    children: ReactNode;
    onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    isLoading?: boolean;
    isDisabled?: boolean;
    hasBackgoundRipple?: boolean;
    hasIcon?: boolean;
    hide?: boolean;
    buttonStyle?: boolean;
    fitWidth?: boolean;
    customStyle?: {
        borderRadius: string;
        boxShadow: string;
    };
    customEnabledBackgroundColor?: string;
    'data-testid'?: string;
    isActive?: boolean;
}
declare const Button: FC<ButtonProps>;
export default Button;
