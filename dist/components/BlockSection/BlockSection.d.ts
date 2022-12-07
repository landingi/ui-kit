import { FC, MouseEvent } from 'react';
interface BlockSectionProps {
    className?: string | string[];
    title: string | string[];
    message: string | string[];
    button?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    url: string;
    reverse?: boolean;
    list?: string[];
}
export declare const BlockSection: FC<BlockSectionProps>;
export {};
