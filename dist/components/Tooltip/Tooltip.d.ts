import { FC, ReactNode } from 'react';
export interface TooltipProps {
    className?: string;
    children: ReactNode;
    effect?: 'solid' | 'float';
    content?: ReactNode;
    disabled?: boolean;
    showOnClick?: boolean;
    placement?: 'top' | 'left' | 'right' | 'bottom';
    align?: 'center' | 'left' | 'right';
}
declare const Tooltip: FC<TooltipProps>;
export default Tooltip;
