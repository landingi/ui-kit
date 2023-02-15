import './DateTimePicker.scss';
import { FC } from 'react';
declare type SetDateArgs = {
    startDate?: Date;
    endDate?: Date;
} | Date;
export interface DateTimePickerProps {
    setDate: (setDateArgs: SetDateArgs) => void;
    minDate?: string | Date;
    maxDate?: string | Date;
    oneDatePicker?: boolean;
    selectedDateCalendar?: Date;
    showMonthAndYearPickers?: boolean;
    i18n: {
        apply: string;
    };
}
export declare const DateTimePicker: FC<DateTimePickerProps>;
export {};
