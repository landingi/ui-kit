import { FC, ReactNode } from 'react';
interface OverflowProps {
    children: ReactNode;
    className?: string | string[];
}
/**
 * Overflow - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - childrens
 * @param {string|array} props.className - list of class names
 * @return {object} An object of children element
 */
export declare const Overflow: FC<OverflowProps>;
export {};
