import { ButtonVariant } from '@components/Button/Button';
import { MouseEvent, ReactNode } from 'react';
declare type Size = 'small' | 'medium' | 'big' | 'fullscreen' | 'huge-responsive';
export interface ModalCommonProps {
    children?: ReactNode;
    className?: string | string[];
    onClick?: () => void;
    onAction?: () => void;
    isActive: boolean;
    isClosable?: boolean;
    isButtonDisabled?: boolean;
    isButtonLoading?: boolean;
    image?: string;
    hasFooter?: boolean;
    hasHeaderDivider?: boolean;
    hasFooterDivider?: boolean;
    actionVariant?: ButtonVariant;
    isLoading?: boolean;
    actionIcon?: string;
    overflowStyle?: object;
    isCentered?: boolean;
    onEdit?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    onMarkAsSpam?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    isEditable?: boolean;
    hasCustomButton?: boolean;
    isCustomButtonDisabled?: boolean;
    isMarkAsSpamVisible?: boolean;
    isPage?: boolean;
    i18n?: {
        title?: string;
        action?: string;
        cancel?: string;
        markSpam?: string;
    };
    isComponent?: boolean;
    component?: ReactNode;
    isSubmit?: boolean;
    onClickCustomButton?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    disableOverflow?: boolean;
    isBodyPadding?: string;
    headingAlign?: 'right' | 'center' | 'left';
    footerAlign?: 'right' | 'center' | 'left';
    hasEnterKeyDown?: boolean;
}
export interface ModalWithAnimation extends ModalCommonProps {
    size?: 'fullscreen';
    hasAnimation?: boolean;
    customZIndex?: undefined;
}
export interface ModalWithoutAnimation extends ModalCommonProps {
    size?: Size;
    hasAnimation?: undefined;
    customZIndex?: {
        backdrop?: number;
        modal?: number;
        dialog?: number;
    };
}
export declare const Modal: import("react").ForwardRefExoticComponent<(ModalWithAnimation | ModalWithoutAnimation) & import("react").RefAttributes<HTMLDivElement>>;
export {};
