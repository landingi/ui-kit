import { FC } from 'react';
declare type ProviderProps = {
    children: React.ReactNode;
    initialValue: string;
};
export declare const TabProvider: FC<ProviderProps>;
export declare const useTabContext: () => {
    activeTab: string;
    changeTab: import("react").Dispatch<import("react").SetStateAction<string>>;
};
export {};
