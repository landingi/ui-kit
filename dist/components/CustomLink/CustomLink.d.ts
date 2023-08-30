import { FC, MouseEventHandler, ReactNode } from 'react';
interface CustomLinkProps {
    className?: string | string[];
    variant?: 'active' | 'inactive' | 'dark' | 'grey';
    label: ReactNode;
    href?: string;
    target?: string;
    size?: 10 | 12 | 14 | 16;
    underlined?: boolean;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    color?: string;
    bold?: boolean;
}
export declare const CustomLink: FC<CustomLinkProps>;
export {};
