import { ReactNode } from 'react';
declare type Value = string | number | null;
declare type ItemBase = {
    value: Value;
    label: string | ReactNode;
    description?: string;
    disabled?: boolean;
    tooltip?: string;
};
export interface PerfectDropdownSelectProps<Item extends ItemBase> {
    className?: string;
    value?: Value;
    onChange?: (key: Value, value?: Value) => void;
    errors?: Record<string, string>;
    touched?: Record<string, boolean>;
    label?: string;
    options: Item[];
    emphasisedOptions?: Item[];
    hasDescription?: boolean;
    hasSearcher?: boolean;
    handleOnSearchChange?: (value?: string) => void;
    isLoading?: boolean;
    emptyMessage?: ReactNode;
    isOpenDisabled?: boolean;
    optionalContent?: ReactNode;
    alwaysShowLabel?: boolean;
    overflowStyle?: object;
    formikKey?: string;
    i18n?: {
        placeholder?: string;
        loadmore?: string;
    };
    hasLoadMoreButton?: boolean;
    loadMoreEvent?: () => void;
    liveChanges?: boolean;
    dropdownLabel?: (item: Item) => ReactNode;
    customValue?: boolean;
    size?: 'mini' | 'small' | 'medium' | 'big' | 'large' | 'huge' | 'extra-huge' | 'auto' | 'fixed';
    dropdownPlacement?: 'bottom-start' | 'bottom-end' | 'bottom-center' | 'top-start' | 'top-center' | 'top-end';
    'data-testid'?: string;
}
export declare const PerfectDropdownSelect: {
    <Item extends ItemBase>({ className, value, onChange, errors, touched, label, options, emphasisedOptions, hasDescription, hasSearcher, handleOnSearchChange, isLoading, emptyMessage, isOpenDisabled, optionalContent, alwaysShowLabel, overflowStyle, formikKey, i18n, hasLoadMoreButton, loadMoreEvent, liveChanges, dropdownLabel, customValue, size, dropdownPlacement, "data-testid": dataTestId, ...rest }: PerfectDropdownSelectProps<Item>): JSX.Element;
    displayName: string;
};
export {};
