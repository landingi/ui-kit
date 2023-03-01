import { FC, ReactNode } from 'react';
export interface AccordionProps {
    data: {
        title: ReactNode;
        description?: ReactNode;
        content: ReactNode;
    }[];
    padding?: 'none' | 'small' | 'medium';
    isBox?: boolean;
}
export declare const Accordion: FC<AccordionProps>;
