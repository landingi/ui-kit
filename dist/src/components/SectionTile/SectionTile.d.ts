import { FC, MouseEvent, ReactNode } from 'react';
export interface SectionTileProps {
    children: ReactNode;
    thumbnailUrl?: string;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    onDoubleClick?: (event: MouseEvent<HTMLDivElement>) => void;
    isActive?: boolean;
}
export declare const SectionTile: FC<SectionTileProps>;
