import { FC, ReactNode } from 'react';
export interface PanelProps {
    className?: string | string[];
    children: ReactNode;
    variant?: 'padding-default' | 'padding-nolr' | 'padding-tiny' | 'padding-none' | 'padding-bottom-tiny' | 'padding-input' | 'padding-huge';
    adjustHeight?: boolean;
    isBackground?: boolean;
    borderRadius?: string;
    customBoxShadow?: string;
    hasShadow?: boolean;
    border?: 'grey' | 'none';
}
export declare const Panel: FC<PanelProps>;
