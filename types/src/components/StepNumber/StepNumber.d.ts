import { FC } from 'react';
interface StepNumberProps {
    className?: string | string[];
    step: number;
    variant?: 'current' | 'completed' | 'next';
    size?: 'small' | 'medium';
    absolute?: boolean;
}
export declare const StepNumber: FC<StepNumberProps>;
export {};
