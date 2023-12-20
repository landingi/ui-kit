import { FC, ReactNode } from 'react';
interface AccordionItemProps {
    className?: string | string[];
    title: ReactNode;
    description?: ReactNode;
    content: ReactNode;
    padding?: 'none' | 'small' | 'medium';
    isBox?: boolean;
    isOpenByDefault?: boolean;
    spaceBetweenItems?: 20;
    height?: 68;
}
export declare const AccordionItem: FC<AccordionItemProps>;
export {};
