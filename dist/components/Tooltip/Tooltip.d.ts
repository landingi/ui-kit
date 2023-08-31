import { FC, ReactElement, ReactNode } from 'react';
export interface TooltipProps {
    className?: string;
    children: ReactElement;
    content?: ReactNode;
    disabled?: boolean;
    showOnClick?: boolean;
    placement?: 'top' | 'left' | 'right' | 'bottom';
    align?: 'center' | 'left' | 'right';
    'data-testid'?: string | undefined;
}
export declare const Tooltip: FC<TooltipProps>;
