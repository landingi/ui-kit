import { FC, ReactNode } from 'react';
interface TabsProps {
    initialValue: string;
    className?: string | string[];
    children: ReactNode;
}
export declare const Tabs: FC<TabsProps>;
export {};
