import { FC, ReactNode } from 'react';
export interface AccordionProps {
    data: {
        title: ReactNode;
        description?: ReactNode;
        content: ReactNode;
    }[];
    padding?: 'none' | 'small' | 'medium';
    isBox?: boolean;
    isOpenByDefault?: boolean;
    spaceBetweenItems?: 20;
    height?: 68;
    className?: string | string[];
}
export declare const Accordion: FC<AccordionProps>;
