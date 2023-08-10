import { FC } from 'react';
type Value = string | number | null;
interface Option {
    label: string;
    value: Value;
    icon?: string;
    selected?: boolean;
    matchesSearchPhrase?: boolean;
}
export interface EmptySearchResultsComponentProps {
    addCustomOption: (option: Option) => void;
    searchPhrase: string;
}
interface MultiSelectProps {
    onChange: (formikKey: string, value: Value[]) => void;
    id: string;
    className?: string | string[];
    formikKey: string;
    'data-testid'?: string;
    initialOptions: Option[];
    values: Value[];
    searcher: {
        i18n: {
            placeholder: string;
        };
    };
    emptySearchResultsComponent: FC<EmptySearchResultsComponentProps>;
}
export declare const MultiSelect: FC<MultiSelectProps>;
export {};
