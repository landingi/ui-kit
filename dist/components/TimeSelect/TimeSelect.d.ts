import { FC } from 'react';
interface TimeSelectProps {
    inModalName?: string;
    value?: string;
    onChange: (arg1: string, arg2?: string) => void;
    formikKey?: string;
    label: string;
    disabled?: boolean;
    size?: 'small' | 'default';
}
export declare const TimeSelect: FC<TimeSelectProps>;
export {};
