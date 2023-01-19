import { FC, ReactNode } from 'react';
interface MessageProps {
    children?: ReactNode;
    className?: string | string[];
    title?: string;
    message?: string;
    url?: string;
    height?: number;
    titleLevel?: 1 | 2 | 3 | 4 | 5 | 6 | 'large';
    messageLevel?: 1 | 2 | 3 | 4 | 5 | 6 | 'large';
    video?: ReactNode;
    multimediaPosition?: 'before' | 'after';
    bold?: boolean;
    withoutMargin?: boolean;
}
export declare const Message: FC<MessageProps>;
export {};
