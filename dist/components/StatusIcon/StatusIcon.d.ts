import { FC } from 'react';
interface StatusIconProps {
    className?: string | string[];
    variant?: 'active' | 'inactive' | 'warning';
    size?: 'tiny' | 'medium' | 'big';
    tooltip?: string;
}
export declare const StatusIcon: FC<StatusIconProps>;
export {};
