import { FC, ReactNode } from 'react';
interface CheckProps {
    className?: string | string[];
    children: ReactNode;
    positive?: boolean;
    crossedOutOnPositive?: boolean;
}
export declare const Check: FC<CheckProps>;
export {};
