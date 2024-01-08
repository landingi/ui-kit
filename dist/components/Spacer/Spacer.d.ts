import { FC } from 'react';
export interface SpacerProps {
    className?: string | string[];
    space?: 'mini' | 'tiny' | 'small' | 'medium' | 'regular' | 'large' | 'big' | 'huge';
}
export declare const Spacer: FC<SpacerProps>;
