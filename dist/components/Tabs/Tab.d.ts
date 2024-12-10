import { FC, MouseEvent, ReactNode } from 'react';
interface TabProps {
    name: string;
    onClick: (event: MouseEvent<HTMLSpanElement>) => void;
    className?: string | string[];
    children: ReactNode;
    isDisabled?: boolean;
    disableQueryString?: boolean;
}
export declare const Tab: FC<TabProps>;
export {};
