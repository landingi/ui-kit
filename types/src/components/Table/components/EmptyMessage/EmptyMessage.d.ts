import { FC, ReactNode } from 'react';
interface EmptyMessageProps {
    colSpan: number;
    emptyMessage: () => ReactNode;
}
export declare const EmptyMessage: FC<EmptyMessageProps>;
export {};
