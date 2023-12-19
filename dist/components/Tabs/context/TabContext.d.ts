import { FC } from 'react';
type ProviderProps = {
    children: React.ReactNode;
    initialValue: string;
    changeTabValue: string;
};
export declare const TabProvider: FC<ProviderProps>;
export declare const useTabContext: () => {
    activeTab: string;
    changeTab: import("react").Dispatch<import("react").SetStateAction<string>>;
};
export {};
