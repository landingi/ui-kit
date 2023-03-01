import { FC, ReactNode } from 'react';
export interface SectionProps {
    className?: string | string[];
    children: ReactNode;
    space?: 'medium' | 'huge';
    width?: 'full';
    background?: 'default' | 'white';
}
export declare const Section: FC<SectionProps>;
