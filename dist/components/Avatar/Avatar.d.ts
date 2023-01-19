import { FC } from 'react';
interface AvatarProps {
    className?: string | string[];
    size?: 'tiny' | 'medium';
    variant?: 'image' | 'blank';
    src?: string;
    name?: string;
}
export declare const Avatar: FC<AvatarProps>;
export {};
