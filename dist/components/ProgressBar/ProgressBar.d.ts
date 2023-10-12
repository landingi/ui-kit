import { FC } from 'react';
export interface ProgressBarProps {
    size?: 'small' | 'medium';
    variant: 'success' | 'warning' | 'alert' | 'progress' | 'brand';
    quantity: number;
    limit?: number;
    border?: 'white' | 'grey';
    i18n?: {
        limitAlert: string;
    };
    showValue?: boolean;
    valueSize?: 10 | 12 | 16 | 18 | 32 | 44 | 62;
    withoutAnimation?: boolean;
}
export declare const ProgressBar: FC<ProgressBarProps>;
