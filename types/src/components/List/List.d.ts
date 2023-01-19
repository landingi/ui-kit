import { FC, ReactNode } from 'react';
interface ListProps {
    children: ReactNode;
    listStyle?: 'ordered-check' | 'ordered-decimal' | 'ordered-disc';
    className?: string | string[];
    variant?: 'inline';
}
export declare const List: FC<ListProps>;
export {};
