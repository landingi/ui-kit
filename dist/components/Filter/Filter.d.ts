import { FC, ReactNode } from 'react';
export interface FilterProps {
    values: {
        label: ReactNode;
        value: string | number;
    }[];
    setValue?: (value: string | number) => void;
    initialValue: string | number;
    localStorageKey?: string;
    customLabel?: (children: ReactNode) => ReactNode;
    'data-testid'?: string;
    dropdownPlacement?: 'bottom-start' | 'bottom-end' | 'bottom-center' | 'top-start' | 'top-center' | 'top-end';
}
export declare const Filter: FC<FilterProps>;
