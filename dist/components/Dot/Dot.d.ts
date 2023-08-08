import { FC, ReactNode } from 'react';
interface DotProps {
    variant?: 'brand' | 'alert' | 'warning' | 'success' | 'info' | 'pending' | 'accent-1' | 'accent-2' | 'accent-3' | 'accent-4' | 'accent-5' | 'accent-6' | 'accent-7';
    label?: ReactNode | string;
    className?: string | string[];
}
export declare const Dot: FC<DotProps>;
export {};
