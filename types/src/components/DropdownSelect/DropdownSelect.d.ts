export default DropdownSelect;
/**
 * DropdownSelect - stateless presentational component
 * @param {object} props - props
 * @param {string} props.value - field value
 * @param {func} props.onChange - on Change handler
 * @param {string} props.label - label
 * @param {object} props.errors - element errors list
 * @param {object} props.touched - element touched list
 * @param {string} props.label - label
 * @param {array} props.options - list of options
 * @param {func} props.handleOnSearchChange - on search input change handler
 * @param {string} props.searchPlaceholder - search placeholder
 * @param {bool} props.inModal - position in modal
 * @param {bool} props.isLoading - list loading spinner
 * @param {bool} props.isEmptyList - display empty list
 * @param {bool} props.liveChanges - search by entering characters
 * @param {bool} props.optionalContent
 * @param {func} props.dropdownLabel
 * @param {func} props.className - wrapper custom styles
 * @param {func} props.customValue - allow use custom value which is not in options
 * @param {func} props.formikKey - name on formik 'nasted' keys
 * @param {bool} props.alwaysShowLabel - always show label on top
 * @param {bool} props.isOpenDisabled - when its true dropdown can't be open, default: false
 * @param {string} props.alwaysShowLabel - always show label on top
 * @param {string} props.searchInOptions - alow user to search item in options list
 * @param {string} props.i18n - object of translations
 * @return {object} An object of children element
 */
declare function DropdownSelect({ value, onChange, errors, touched, label, options, handleOnSearchChange, inModalName, isLoading, isEmptyList, hasDescription, overflowStyle, emphasisedOptions, liveChanges, optionalContent, dropdownLabel, className, customValue, formikKey, alwaysShowLabel, isOpenDisabled, searchInOptions, i18n }: {
    value: string;
    onChange: func;
    label: string;
    errors: object;
    touched: object;
    label: string;
    options: array;
    handleOnSearchChange: func;
    searchPlaceholder: string;
    inModal: bool;
    isLoading: bool;
    isEmptyList: bool;
    liveChanges: bool;
    optionalContent: bool;
    dropdownLabel: func;
    className: func;
    customValue: func;
    formikKey: func;
    alwaysShowLabel: bool;
    isOpenDisabled: bool;
    alwaysShowLabel: bool;
    searchInOptions: string;
    i18n: string;
}): object;
declare namespace DropdownSelect {
    const displayName: string;
    namespace propTypes {
        const value: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        const onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        const errors: PropTypes.Requireable<{
            [x: string]: string | null | undefined;
        }>;
        const touched: PropTypes.Requireable<Object>;
        const label: PropTypes.Requireable<NonNullable<string | PropTypes.ReactElementLike | null | undefined>>;
        const options: PropTypes.Validator<(PropTypes.InferProps<{
            label: PropTypes.Validator<NonNullable<NonNullable<string | PropTypes.ReactElementLike | null | undefined>>>;
            value: PropTypes.Validator<NonNullable<NonNullable<string | number | null | undefined>>>;
        }> | null | undefined)[]>;
        const handleOnSearchChange: PropTypes.Requireable<(...args: any[]) => any>;
        const inModalName: PropTypes.Requireable<string>;
        const isLoading: PropTypes.Requireable<boolean>;
        const isEmptyList: PropTypes.Requireable<boolean>;
        const hasDescription: PropTypes.Requireable<boolean>;
        const overflowStyle: PropTypes.Requireable<Object>;
        const emphasisedOptions: PropTypes.Requireable<(PropTypes.InferProps<{
            label: PropTypes.Requireable<string>;
            value: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        }> | null | undefined)[]>;
        const liveChanges: PropTypes.Requireable<boolean>;
        const optionalContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const dropdownLabel: PropTypes.Requireable<(...args: any[]) => any>;
        const className: PropTypes.Requireable<string>;
        const customValue: PropTypes.Requireable<boolean>;
        const formikKey: PropTypes.Requireable<string>;
        const alwaysShowLabel: PropTypes.Requireable<boolean>;
        const isOpenDisabled: PropTypes.Requireable<boolean>;
        const searchInOptions: PropTypes.Requireable<boolean>;
        const i18n: PropTypes.Requireable<PropTypes.InferProps<{
            placeholder: PropTypes.Requireable<string>;
            emptySearchMessageTitle: PropTypes.Requireable<string>;
            emptySearchMessage: PropTypes.Requireable<string>;
        }>>;
    }
    namespace defaultProps {
        const label_1: string;
        export { label_1 as label };
        export const searchPlaceholder: string;
        const inModalName_1: string;
        export { inModalName_1 as inModalName };
        const errors_1: {};
        export { errors_1 as errors };
        const touched_1: {};
        export { touched_1 as touched };
        const overflowStyle_1: {};
        export { overflowStyle_1 as overflowStyle };
        const emphasisedOptions_1: never[];
        export { emphasisedOptions_1 as emphasisedOptions };
        const handleOnSearchChange_1: null;
        export { handleOnSearchChange_1 as handleOnSearchChange };
        const value_1: null;
        export { value_1 as value };
        const liveChanges_1: boolean;
        export { liveChanges_1 as liveChanges };
        const optionalContent_1: null;
        export { optionalContent_1 as optionalContent };
        const dropdownLabel_1: null;
        export { dropdownLabel_1 as dropdownLabel };
        const className_1: string;
        export { className_1 as className };
        const customValue_1: boolean;
        export { customValue_1 as customValue };
        const alwaysShowLabel_1: boolean;
        export { alwaysShowLabel_1 as alwaysShowLabel };
        const isOpenDisabled_1: boolean;
        export { isOpenDisabled_1 as isOpenDisabled };
        const searchInOptions_1: boolean;
        export { searchInOptions_1 as searchInOptions };
        const isLoading_1: boolean;
        export { isLoading_1 as isLoading };
        const isEmptyList_1: boolean;
        export { isEmptyList_1 as isEmptyList };
        const hasDescription_1: boolean;
        export { hasDescription_1 as hasDescription };
        export function onBlur_1(): null;
        export { onBlur_1 as onBlur };
        export function onChange_1(): null;
        export { onChange_1 as onChange };
    }
}
import PropTypes from "prop-types";
