import { FC } from 'react';
interface DividerProps {
    className?: string | string[];
    variant?: 'dropdown' | 'horizontal' | 'menu' | 'normal';
    align?: string;
}
declare const Divider: FC<DividerProps>;
export default Divider;
