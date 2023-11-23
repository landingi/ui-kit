import { FC, ReactNode } from 'react';
export interface BadgeProps {
    children: ReactNode;
    className?: string | string[];
    type?: 'warning' | 'alert' | 'pending' | 'success' | 'info' | 'paid' | 'open' | 'canceled' | 'ai' | 'accent-1' | 'accent-2' | 'accent-3' | 'accent-4' | 'accent-5' | 'accent-6' | 'accent-7' | 'accent-8' | 'green-with-border' | 'info-with-border';
    tooltip?: ReactNode;
    isIndicator?: boolean;
    isTextUppercase?: boolean;
    weight?: '300' | '400' | '700';
}
export declare const Badge: FC<BadgeProps>;
