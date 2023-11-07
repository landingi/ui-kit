import { FC, ReactNode } from 'react';
interface PerfectDropdownProps {
    hasArrow?: boolean;
    arrowType?: 'caret' | 'dots';
    size?: 'mini' | 'small' | 'medium' | 'big' | 'large' | 'huge' | 'extra-huge' | 'auto' | 'fixed';
    dropdownPlacement?: 'bottom-start' | 'bottom-end' | 'bottom-center' | 'top-start' | 'top-center' | 'top-end';
    fontColor?: 'color-1' | 'color-3';
    fontWeight?: 400 | 600;
    hasHoverLabel?: boolean;
    handleOnOpen?: () => void;
    handleOnClose?: () => void;
    alignment?: 'center' | 'spaced' | 'end';
    children: ReactNode;
    icon?: string;
    label?: ReactNode;
    hasInput?: boolean;
    hasFullInputStyle?: boolean;
    asPlaceholder?: boolean;
    customTrigger?: FC<{
        isOpen: boolean;
    }>;
    className?: string | string[];
    offset?: number;
    padding?: 'none';
    ['data-testid']?: string;
    isOpenDisabled?: boolean;
    initialState?: boolean;
    innerDropdown?: boolean;
}
export declare const PerfectDropdown: import("react").ForwardRefExoticComponent<PerfectDropdownProps & import("react").RefAttributes<HTMLSpanElement>>;
export {};
