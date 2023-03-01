import { FC, ReactElement } from 'react';
export interface ButtonGroupProps {
    children: ReactElement[];
    initialValue?: string;
    onChange: (value: string | null) => void;
}
export declare const ButtonGroup: FC<ButtonGroupProps>;
