import { FC } from 'react';
export interface LegendProps {
    className?: string | string[];
    data: {
        range: string;
        variant: 'alert' | 'warning' | 'success' | 'info';
    }[];
    alignment?: 'vertical' | 'horizontal';
}
export declare const Legend: FC<LegendProps>;
export default Legend;
