import { FC } from 'react';
export interface PickerProps {
    minDate: Date;
    maxDate: Date;
    onChange?: (range: {
        startDate: Date;
        endDate: Date;
    } | null) => void;
    i18n?: {
        apply: string;
    };
    i18nHandler?: (translation: string) => string;
}
export declare const Picker: FC<PickerProps>;
