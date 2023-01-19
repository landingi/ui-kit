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
        className: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        errors: PropTypes.Requireable<{
            [x: string]: string | null | undefined;
        }>;
        touched: PropTypes.Requireable<Object>;
        label: PropTypes.Requireable<NonNullable<string | PropTypes.ReactElementLike | null | undefined>>;
        options: PropTypes.Validator<(PropTypes.InferProps<{
            label: PropTypes.Validator<NonNullable<NonNullable<string | PropTypes.ReactElementLike | null | undefined>>>;
            value: PropTypes.Validator<NonNullable<NonNullable<string | number | null | undefined>>>;
        }> | null | undefined)[]>;
        emphasisedOptions: PropTypes.Requireable<(PropTypes.InferProps<{
            label: PropTypes.Requireable<string>;
            value: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        }> | null | undefined)[]>;
        hasDescription: PropTypes.Requireable<boolean>;
        hasSearcher: PropTypes.Requireable<boolean>;
        handleOnSearchChange: PropTypes.Requireable<(...args: any[]) => any>;
        isLoading: PropTypes.Requireable<boolean>;
        emptyMessage: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        isOpenDisabled: PropTypes.Requireable<boolean>;
        optionalContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        alwaysShowLabel: PropTypes.Requireable<boolean>;
        overflowStyle: PropTypes.Requireable<Object>;
        formikKey: PropTypes.Requireable<string>;
        i18n: PropTypes.Requireable<PropTypes.InferProps<{
            placeholder: PropTypes.Requireable<string>;
            loadmore: PropTypes.Requireable<string>;
        }>>;
        hasLoadMoreButton: PropTypes.Requireable<boolean>;
        loadMoreEvent: PropTypes.Requireable<(...args: any[]) => any>;
        liveChanges: PropTypes.Requireable<boolean>;
        'data-testid': PropTypes.Requireable<string>;
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
import PropTypes from "prop-types";
