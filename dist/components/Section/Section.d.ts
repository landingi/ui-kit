import { FC, ReactNode } from 'react';
export interface SectionProps {
    className?: string | string[];
    children: ReactNode;
    space?: string;
    width?: string;
    background?: string;
}
export declare const Section: FC<SectionProps>;
