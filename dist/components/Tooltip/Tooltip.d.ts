import { FC, ReactNode } from 'react';
export interface TooltipProps {
    className?: string;
    tooltipClassName?: string;
    children: ReactNode;
    content?: ReactNode;
    disabled?: boolean;
    showOnClick?: boolean;
    placement?: 'top' | 'left' | 'right' | 'bottom';
    align?: 'center' | 'left' | 'right';
    'data-testid'?: string | undefined;
}
export declare const Tooltip: FC<TooltipProps>;
