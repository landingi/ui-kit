import { FC } from 'react';
interface StatsBadgeProps {
    className?: string | string[];
    color?: 'green' | 'yellow' | 'pink';
    quantity?: number;
    description: string;
}
export declare const StatsBadge: FC<StatsBadgeProps>;
export {};
