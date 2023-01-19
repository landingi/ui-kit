import { FC, ReactNode } from 'react';
interface ColorNumberProps {
    className?: string | string[];
    children: ReactNode;
    variant: 'alert' | 'warning' | 'success' | 'default' | 'progress' | 'info' | 'brand' | 'white';
    size?: 10 | 12 | 16 | 18 | 32 | 44 | 62;
}
declare const ColorNumber: FC<ColorNumberProps>;
export default ColorNumber;
