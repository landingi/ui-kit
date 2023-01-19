import { FC, ReactNode } from 'react';
interface OverflowTooltipProps {
    content: string;
    placement?: 'top' | 'left' | 'right' | 'bottom';
    length?: number;
    children?: ReactNode;
    className?: string | string[];
}
/**
 * OverflowTooltip - stateless presentational component
 * @param {string} props.content - content to overflow
 * @param {string} props.placement - tooltip placement
 * @param {number} props.length - max content length to overflow if it is exceeded
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names out of component
 * @return {object} An object of children element
 */
export declare const OverflowTooltip: FC<OverflowTooltipProps>;
export {};
