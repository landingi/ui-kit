import { FC, ReactNode } from 'react';
interface ListItemProps {
    children: ReactNode;
    variant?: 'menu' | 'dropdown' | 'table' | 'list' | 'block' | 'inline';
    size?: 'small';
    className?: string | string[];
    margin?: boolean;
}
export declare const ListItem: FC<ListItemProps>;
export {};
