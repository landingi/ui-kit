import { FC, ReactNode } from 'react';
interface LayoutProps {
    className?: string | string[];
    children: ReactNode;
    width?: 'large' | 'big' | 'full';
    'data-testid'?: string;
}
export declare const Layout: FC<LayoutProps>;
export {};
