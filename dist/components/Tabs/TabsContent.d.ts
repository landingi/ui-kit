import { Dispatch, FC, SetStateAction } from 'react';
interface TabsContentProps {
    children: FC<{
        changeTab?: Dispatch<SetStateAction<string>>;
    }>;
}
export declare const TabsContent: FC<TabsContentProps>;
export {};
