import { FC, ReactNode } from 'react';
interface BadgeProps {
    children: ReactNode;
    className?: string | string[];
    type?: 'primary' | 'secondary' | 'warning' | 'alert' | 'pending' | 'success' | 'info' | 'indicator' | 'paid' | 'open' | 'canceled' | 'ai' | 'accent-1' | 'accent-2' | 'accent-3' | 'accent-4' | 'accent-5' | 'accent-6' | 'accent-7' | 'accent-8';
    tooltip?: ReactNode;
    isIndicator?: boolean;
}
export declare const Badge: FC<BadgeProps>;
export {};
