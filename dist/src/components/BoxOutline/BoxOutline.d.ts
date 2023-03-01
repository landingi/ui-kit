import { FC, MouseEvent, PointerEvent, ReactNode } from 'react';
interface BoxOutlineProps {
    children: ReactNode;
    className?: string | string[];
    variant?: 'default' | 'background';
    isSelected?: boolean;
    onClickHandler?: (e: PointerEvent<HTMLDivElement>) => void;
    onDoubleClickHandler?: (e: PointerEvent<HTMLDivElement>) => void;
    padding?: 'none' | 'large';
    disableHover?: boolean;
    disabled?: boolean;
    noCheckmark?: boolean;
    onMouseOver?: (e: MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (e: MouseEvent<HTMLDivElement>) => void;
}
export declare const BoxOutline: FC<BoxOutlineProps>;
export {};
