import { FC } from 'react';
interface AvatarProps {
    className?: string | string[];
    size?: 'tiny' | 'medium';
    variant?: 'image' | 'blank';
    src?: string;
    name?: string;
}
declare const Avatar: FC<AvatarProps>;
export default Avatar;
