import { FC, MouseEvent } from 'react';
interface InfoSectionProps {
    className?: string | string[];
    title: string;
    list: string[];
    url: string;
    button: string;
    image?: {
        src: string;
        size: number;
    };
    onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}
export declare const InfoSection: FC<InfoSectionProps>;
export {};
