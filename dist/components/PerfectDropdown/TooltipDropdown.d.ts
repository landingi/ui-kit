import { FC, ReactNode } from 'react';
interface TooltipDropdownProps {
    hasArrow?: boolean;
    arrowType?: 'caret' | 'dots';
    size?: 'mini' | 'small' | 'medium' | 'big' | 'large' | 'huge' | 'extra-huge' | 'auto' | 'fixed';
    dropdownPlacement?: 'bottom-start' | 'bottom-end' | 'bottom-center' | 'top-start' | 'top-center' | 'top-end';
    handleOnOpen?: () => void;
    handleOnClose?: () => void;
    alignment?: 'center' | 'spaced' | 'end';
    children: ReactNode;
    icon?: string;
    label?: string;
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
    innerDropdown?: boolean;
    tooltip: string;
    tooltipPlacement?: 'top' | 'left' | 'right' | 'bottom';
}
export declare const TooltipDropdown: FC<TooltipDropdownProps>;
export {};
