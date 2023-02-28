import { FC } from 'react';
export interface MonthRangePickerProps {
    onChange: (range: {
        startDate: Date;
        endDate: Date;
    } | null) => void;
    minDate: Date;
    maxDate: Date;
    i18nHandler: (translation: string) => string;
}
export declare const MonthRangePicker: FC<MonthRangePickerProps>;
