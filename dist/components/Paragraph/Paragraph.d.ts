import { FC, ReactNode } from 'react';
interface ParagraphProps {
    className?: string | string[];
    children: ReactNode;
    color?: 'accent-1' | 'accent-2' | 'accent-3' | 'accent-4' | 'accent-5' | 'accent-6' | 'accent-7' | 'info' | 'white' | 'color-8' | 'success' | 'brand' | 'warning';
    size?: 10 | 12 | 14 | 16 | 18;
    align?: 'left' | 'center' | 'right' | 'justify';
    padding?: 'small' | 'medium' | 'none';
    weight?: 300 | 400 | 700;
    uppercase?: boolean;
    line?: 18 | 20 | 22 | 24 | 28;
    decoration?: 'line-through';
}
export declare const Paragraph: FC<ParagraphProps>;
export {};
