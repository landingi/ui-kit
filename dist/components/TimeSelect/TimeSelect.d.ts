import { FC } from 'react';
export interface TimeSelectProps {
    value?: string;
    onChange: (arg1: string, arg2?: string) => void;
    formikKey?: string;
    label: string;
    disabled?: boolean;
    size?: 'small' | 'default';
    isAmPmType?: boolean;
}
export declare const TimeSelect: FC<TimeSelectProps>;
