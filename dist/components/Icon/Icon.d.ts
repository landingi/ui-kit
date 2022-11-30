import { FC } from 'react';
interface IconProps {
    icon: string;
    color?: string;
    className?: string | string[];
    spin?: boolean;
    size?: 10 | 12 | 14;
    autoSize?: boolean;
    'data-testid'?: string;
}
declare const Icon: FC<IconProps>;
export default Icon;
