import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
interface ButtonGroupContextValue {
    selected: string | null;
    setSelected: Dispatch<SetStateAction<string | null>>;
}
interface ButtonGroupProviderProps {
    children: ReactNode;
    initialValue?: string | null;
    onChange: (value: string | null) => void;
}
export declare const ButtonGroupProvider: FC<ButtonGroupProviderProps>;
export declare const useButtonGroupContext: () => ButtonGroupContextValue;
export {};
