import { FC, ReactNode } from 'react';
interface AccordionItemProps {
    className?: string | string[];
    title: ReactNode;
    description?: ReactNode;
    content: ReactNode;
    padding?: 'none' | 'small' | 'medium';
    isBox?: boolean;
    isOpenByDefault?: boolean;
}
export declare const AccordionItem: FC<AccordionItemProps>;
export {};
