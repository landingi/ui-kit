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
/**
 * Tooltip - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string} props.placement - placement, default `bottom`
 * @param {string} props.align - align, default `left`
 * @param {string} props.effect - behaviour of tooltip
 * @param {string|object} props.content - content
 * @param {bool} props.disabled - disabled
 * @param {bool} props.showOnClick - show on click
 * @return {object} An object of children element
 */
declare const Tooltip: FC<TooltipProps>;
export default Tooltip;
