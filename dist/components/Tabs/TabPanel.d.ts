import { FC, ReactNode } from 'react';
interface TabPanelProps {
    name: string;
    className?: string | string[];
    children: ReactNode;
}
export declare const TabPanel: FC<TabPanelProps>;
export {};
