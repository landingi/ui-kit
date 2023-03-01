import { FC } from 'react';
export interface StatusIconProps {
    className?: string | string[];
    variant?: 'active' | 'inactive' | 'warning';
    size?: 'tiny' | 'medium' | 'big';
    tooltip?: string;
}
export declare const StatusIcon: FC<StatusIconProps>;
