import { FC, ReactEventHandler } from 'react';
interface GalleryImageProps {
    src: string;
    onClick?: ReactEventHandler<HTMLDivElement>;
    onDoubleClick?: ReactEventHandler<HTMLDivElement>;
}
export declare const GalleryImage: FC<GalleryImageProps>;
export {};
