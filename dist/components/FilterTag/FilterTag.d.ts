import { FC, ReactNode } from 'react';
export interface FilterTagProps {
    children: ReactNode;
    className?: string | string[];
    variant: 'primary' | 'secondary';
    onClick?: () => void;
    handleClose?: () => void;
    isDisabled?: boolean;
}
export declare const FilterTag: FC<FilterTagProps>;
