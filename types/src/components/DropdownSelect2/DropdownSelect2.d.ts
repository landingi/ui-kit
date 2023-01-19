export default DropdownSelect;
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
 * @param {func} props.handleOnOpen - callback called when dropdown is opening
 * @param {func} props.handleOnClose - callback called when dropdown is closing
 * @param {bool} props.isLoading - list loading spinner
 * @param {object} props.emptyMessage - empty message component
 * @param {bool} props.isOpenDisabled - when its true dropdown can't be open, default: false
 * @param {bool} props.optionalContent - optional content to render on bottom
 * @param {bool} props.alwaysShowLabel - always show label on top
 * @param {object} props.overflowStyle - overflow styles
 * @param {func} props.formikKey - name on formik 'nasted' keys
 * @param {string} props.i18n - object of translations
 * @param {string} props.inModalName - modal name for positioning
 * @return {object} An object of children element
 */
declare function DropdownSelect({ className, value, onChange, errors, touched, label, options, emphasisedOptions, hasDescription, hasSearcher, handleOnSearchChange, handleOnOpen, handleOnClose, isLoading, emptyMessage, isOpenDisabled, optionalContent, alwaysShowLabel, overflowStyle, formikKey, i18n, inModalName }: {
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
    handleOnOpen: func;
    handleOnClose: func;
    isLoading: bool;
    emptyMessage: object;
    isOpenDisabled: bool;
    optionalContent: bool;
    alwaysShowLabel: bool;
    overflowStyle: object;
    formikKey: func;
    i18n: string;
    inModalName: string;
}): object;
declare namespace DropdownSelect {
    const displayName: string;
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const value: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        const errors: PropTypes.Requireable<Object>;
        const touched: PropTypes.Requireable<Object>;
        const label: PropTypes.Requireable<NonNullable<string | PropTypes.ReactElementLike | null | undefined>>;
        const options: PropTypes.Validator<(PropTypes.InferProps<{
            label: PropTypes.Validator<NonNullable<NonNullable<string | PropTypes.ReactElementLike | null | undefined>>>;
            value: PropTypes.Validator<NonNullable<NonNullable<string | number | null | undefined>>>;
        }> | null | undefined)[]>;
        const emphasisedOptions: PropTypes.Requireable<(PropTypes.InferProps<{
            label: PropTypes.Requireable<string>;
            value: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        }> | null | undefined)[]>;
        const hasDescription: PropTypes.Requireable<boolean>;
        const hasSearcher: PropTypes.Requireable<boolean>;
        const handleOnSearchChange: PropTypes.Requireable<(...args: any[]) => any>;
        const handleOnOpen: PropTypes.Requireable<(...args: any[]) => any>;
        const handleOnClose: PropTypes.Requireable<(...args: any[]) => any>;
        const isLoading: PropTypes.Requireable<boolean>;
        const emptyMessage: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const isOpenDisabled: PropTypes.Requireable<boolean>;
        const optionalContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const alwaysShowLabel: PropTypes.Requireable<boolean>;
        const overflowStyle: PropTypes.Requireable<Object>;
        const formikKey: PropTypes.Requireable<string>;
        const i18n: PropTypes.Requireable<PropTypes.InferProps<{
            placeholder: PropTypes.Requireable<string>;
        }>>;
        const inModalName: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
        const value_1: null;
        export { value_1 as value };
        export function onChange_1(): null;
        export { onChange_1 as onChange };
        const errors_1: {};
        export { errors_1 as errors };
        const touched_1: {};
        export { touched_1 as touched };
        const label_1: string;
        export { label_1 as label };
        const emphasisedOptions_1: never[];
        export { emphasisedOptions_1 as emphasisedOptions };
        const hasDescription_1: boolean;
        export { hasDescription_1 as hasDescription };
        const hasSearcher_1: boolean;
        export { hasSearcher_1 as hasSearcher };
        export function handleOnSearchChange_1(): null;
        export { handleOnSearchChange_1 as handleOnSearchChange };
        export function handleOnOpen_1(): null;
        export { handleOnOpen_1 as handleOnOpen };
        export function handleOnClose_1(): null;
        export { handleOnClose_1 as handleOnClose };
        const isLoading_1: boolean;
        export { isLoading_1 as isLoading };
        const emptyMessage_1: null;
        export { emptyMessage_1 as emptyMessage };
        const isOpenDisabled_1: boolean;
        export { isOpenDisabled_1 as isOpenDisabled };
        const optionalContent_1: null;
        export { optionalContent_1 as optionalContent };
        const alwaysShowLabel_1: boolean;
        export { alwaysShowLabel_1 as alwaysShowLabel };
        const overflowStyle_1: {};
        export { overflowStyle_1 as overflowStyle };
        const formikKey_1: string;
        export { formikKey_1 as formikKey };
        export const searchPlaceholder: string;
        export namespace i18n_1 {
            const placeholder: string;
        }
        export { i18n_1 as i18n };
        const inModalName_1: string;
        export { inModalName_1 as inModalName };
    }
}
import PropTypes from "prop-types";
