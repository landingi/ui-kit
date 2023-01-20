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
        const value: any;
        const onChange: any;
        const onBlur: any;
        const errors: any;
        const touched: any;
        const label: any;
        const options: any;
        const handleOnSearchChange: any;
        const inModalName: any;
        const isLoading: any;
        const isEmptyList: any;
        const hasDescription: any;
        const overflowStyle: any;
        const emphasisedOptions: any;
        const liveChanges: any;
        const optionalContent: any;
        const dropdownLabel: any;
        const className: any;
        const customValue: any;
        const formikKey: any;
        const alwaysShowLabel: any;
        const isOpenDisabled: any;
        const searchInOptions: any;
        const i18n: any;
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
