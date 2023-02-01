import { FC, ReactEventHandler } from 'react';
export interface SelectProps {
    value?: number | string;
    data: {
        label: string;
        value: number | string;
    }[];
    name: string;
    onChange?: ReactEventHandler<HTMLSelectElement>;
    'data-testid'?: string;
}
export declare const Select: FC<SelectProps>;
