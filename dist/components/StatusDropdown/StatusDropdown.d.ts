import { FC, ReactNode } from 'react';
export interface StatusDropdownProps {
    children: ReactNode;
    label: string;
    dropdownPlacement: 'bottom-start' | 'bottom-end' | 'bottom-center' | 'top-start' | 'top-center' | 'top-end';
    className?: string | string[];
    status?: 'alert' | 'warning' | 'success' | 'info';
}
/**
 * StatusDropdown - dropdown component that uses custom trigger whose color depends on status prop given
 * @param {object} children - object of children
 * @param {string} label - label text
 * @param {string} dropdownPlacement - dropdown placement
 * @param {string} className - class name
 * @param {string} status - changes color of dropdown
 * @return an object of children
 */
export declare const StatusDropdown: FC<StatusDropdownProps>;
