import './DateTimePicker.scss';
import { FC } from 'react';
export interface DateTimePickerProps {
    setDate: ({ startDate, endDate }: {
        startDate?: Date;
        endDate?: Date;
    }) => void;
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
