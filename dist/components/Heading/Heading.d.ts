import { FC, ReactNode } from 'react';
interface HeadingProps {
    className?: string | string[];
    children: ReactNode;
    level: 1 | 2 | 3 | 4 | 5 | 6 | 'large';
    align?: 'left' | 'center' | 'right';
    margin?: 'none';
    bold?: boolean;
    color?: 'white' | 'brand';
}
export declare const Heading: FC<HeadingProps>;
export {};
