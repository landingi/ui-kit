export default PerfectDropdownSelect;
/**
 * DropdownSelect - stateless presentational component
 * @param {object} props - props
 * @param {func} props.className - wrapper custom styles
 * @param {string} props.value - field value
 * @param {func} props.onChange - on Change handler
 * @param {object} props.errors - element errors list
 * @param {object} props.touched - element touched list
 * @param {string} props.label - label
 * @param {array} props.options - list of options
 * @param {array} props.emphasisedOptions - list of emphasised options, displayed on top
 * @param {array} props.hasDescription - render description in options
 * @param {string} props.hasSearcher - show Searcher
 * @param {func} props.handleOnSearchChange - on search input change handler
 * @param {bool} props.isLoading - list loading spinner
 * @param {object} props.emptyMessage - empty message component
 * @param {bool} props.isOpenDisabled - when its true dropdown can't be open, default: false
 * @param {bool} props.optionalContent - optional content to render on bottom
 * @param {bool} props.alwaysShowLabel - always show label on top
 * @param {object} props.overflowStyle - overflow styles
 * @param {func} props.formikKey - name on formik 'nasted' keys
 * @param {object} props.i18n - object of translations
 * @param {bool} props.hasLoadMoreButton - conditional render load more button
 * @param {func} props.loadMoreEvent - handleClickCloadMore
 * @return {object} An object of children element
 */
declare function PerfectDropdownSelect({ className, value, onChange, errors, touched, label, options, emphasisedOptions, hasDescription, hasSearcher, handleOnSearchChange, isLoading, emptyMessage, isOpenDisabled, optionalContent, alwaysShowLabel, overflowStyle, formikKey, i18n, hasLoadMoreButton, loadMoreEvent, liveChanges, "data-testid": dataTestId }: {
    className: func;
    value: string;
    onChange: func;
    errors: object;
    touched: object;
    label: string;
    options: array;
    emphasisedOptions: array;
    hasDescription: array;
    hasSearcher: string;
    handleOnSearchChange: func;
    isLoading: bool;
    emptyMessage: object;
    isOpenDisabled: bool;
    optionalContent: bool;
    alwaysShowLabel: bool;
    overflowStyle: object;
    formikKey: func;
    i18n: object;
    hasLoadMoreButton: bool;
    loadMoreEvent: func;
}): object;
declare namespace PerfectDropdownSelect {
    const displayName: string;
    const propTypes: {
        className: any;
        value: any;
        onChange: any;
        errors: any;
        touched: any;
        label: any;
        options: any;
        emphasisedOptions: any;
        hasDescription: any;
        hasSearcher: any;
        handleOnSearchChange: any;
        isLoading: any;
        emptyMessage: any;
        isOpenDisabled: any;
        optionalContent: any;
        alwaysShowLabel: any;
        overflowStyle: any;
        formikKey: any;
        i18n: any;
        hasLoadMoreButton: any;
        loadMoreEvent: any;
        liveChanges: any;
        'data-testid': any;
    };
    const defaultProps: {
        className: string;
        value: null;
        onChange: () => null;
        errors: {};
        touched: {};
        label: string;
        emphasisedOptions: never[];
        hasDescription: boolean;
        hasSearcher: boolean;
        handleOnSearchChange: () => null;
        isLoading: boolean;
        emptyMessage: null;
        isOpenDisabled: boolean;
        optionalContent: null;
        alwaysShowLabel: boolean;
        overflowStyle: {};
        formikKey: string;
        searchPlaceholder: string;
        i18n: {
            placeholder: string;
            loadmore: string;
        };
        hasLoadMoreButton: null;
        loadMoreEvent: null;
        liveChanges: boolean;
        'data-testid': string;
    };
}
