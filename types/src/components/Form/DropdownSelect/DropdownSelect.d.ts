export default DropdownSelectForm;
/**
 * Select - stateless presentational component
 * @param {object} props - props
 * @param {string} props.name - field name
 * @param {string} props.value - field value
 * @param {func} props.onChange - on Change handler
 * @param {string} props.label - label
 * @param {object} props.errors - element errors list
 * @param {object} props.touched - element touched list
 * @param {string} props.hasLabel - has label
 * @param {array} props.options - list of options
 * @param {func} props.handleOnSearchChange - on search input change handler
 * @param {string} props.searchPlaceholder - search placeholder
 * @param {bool} props.inModal - position in modal
 * @param {bool} props.isLoading - list loading spinner
 * @param {bool} props.isEmptyList - display empty list
 * @param {bool} props.hasDescription - description
 * @param {object} props.overflowStyle - overflow style
 * @param {array} props.emphasisedOptions - emphasised options
 * @param {bool} props.liveChanges - search by entering characters
 * @param {bool} props.optionalContent
 * @param {bool} props.hasLoadMoreButton - has load more button
 * @param {function} props.loadMoreEvent - load more button event
 * @param {object} props.i18n - object of translations
 * @return {object} An object of children element
 */
declare function DropdownSelectForm({ name, value, onChange, errors, touched, label, hasLabel, options, handleOnSearchChange, searchPlaceholder, inModal, isLoading, isEmptyList, hasDescription, overflowStyle, emphasisedOptions, liveChanges, optionalContent, hasLoadMoreButton, loadMoreEvent, i18n }: {
    name: string;
    value: string;
    onChange: func;
    label: string;
    errors: object;
    touched: object;
    hasLabel: string;
    options: array;
    handleOnSearchChange: func;
    searchPlaceholder: string;
    inModal: bool;
    isLoading: bool;
    isEmptyList: bool;
    hasDescription: bool;
    overflowStyle: object;
    emphasisedOptions: array;
    liveChanges: bool;
    optionalContent: bool;
    hasLoadMoreButton: bool;
    loadMoreEvent: Function;
    i18n: object;
}): object;
declare namespace DropdownSelectForm {
    const displayName: string;
    namespace propTypes {
        const className: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        const name: PropTypes.Validator<string>;
        const value: PropTypes.Requireable<NonNullable<string | number | boolean | object | null | undefined>>;
        const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        const onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        const errors: PropTypes.Requireable<{
            [x: string]: string | null | undefined;
        }>;
        const touched: PropTypes.Requireable<Object>;
        const id: PropTypes.Validator<string>;
        const label: PropTypes.Requireable<Object>;
        const hasLabel: PropTypes.Requireable<boolean>;
        const placeholder: PropTypes.Requireable<string>;
        const options: PropTypes.Validator<(PropTypes.InferProps<{
            label: PropTypes.Requireable<Object>;
            value: PropTypes.Requireable<NonNullable<string | number | boolean | object | null | undefined>>;
        }> | null | undefined)[]>;
        const handleOnSearchChange: PropTypes.Requireable<(...args: any[]) => any>;
        const searchPlaceholder: PropTypes.Requireable<string>;
        const inModal: PropTypes.Requireable<boolean>;
        const hasDescription: PropTypes.Requireable<boolean>;
        const overflowStyle: PropTypes.Requireable<Object>;
        const emphasisedOptions: PropTypes.Requireable<(PropTypes.InferProps<{
            label: PropTypes.Requireable<Object>;
            value: PropTypes.Requireable<NonNullable<string | number | boolean | object | null | undefined>>;
        }> | null | undefined)[]>;
        const liveChanges: PropTypes.Requireable<boolean>;
        const optionalContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const hasLoadMoreButton: PropTypes.Requireable<boolean>;
        const loadMoreEvent: PropTypes.Requireable<(...args: any[]) => any>;
        const isLoading: PropTypes.Requireable<boolean>;
        const isEmptyList: PropTypes.Requireable<boolean>;
        const i18n: PropTypes.Requireable<PropTypes.InferProps<{
            loadmore: PropTypes.Requireable<string>;
        }>>;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
        const label_1: string;
        export { label_1 as label };
        const placeholder_1: string;
        export { placeholder_1 as placeholder };
        export function onChange_1(): null;
        export { onChange_1 as onChange };
        const handleOnSearchChange_1: null;
        export { handleOnSearchChange_1 as handleOnSearchChange };
        export function onBlur_1(): null;
        export { onBlur_1 as onBlur };
        const errors_1: {};
        export { errors_1 as errors };
        const touched_1: {};
        export { touched_1 as touched };
        const hasLabel_1: boolean;
        export { hasLabel_1 as hasLabel };
        const value_1: null;
        export { value_1 as value };
        const searchPlaceholder_1: string;
        export { searchPlaceholder_1 as searchPlaceholder };
        const inModal_1: boolean;
        export { inModal_1 as inModal };
        export const empty: string;
        export const img: string;
        const isLoading_1: boolean;
        export { isLoading_1 as isLoading };
        const isEmptyList_1: boolean;
        export { isEmptyList_1 as isEmptyList };
        const hasDescription_1: boolean;
        export { hasDescription_1 as hasDescription };
        const overflowStyle_1: {};
        export { overflowStyle_1 as overflowStyle };
        const emphasisedOptions_1: never[];
        export { emphasisedOptions_1 as emphasisedOptions };
        const liveChanges_1: boolean;
        export { liveChanges_1 as liveChanges };
        const optionalContent_1: null;
        export { optionalContent_1 as optionalContent };
        const hasLoadMoreButton_1: boolean;
        export { hasLoadMoreButton_1 as hasLoadMoreButton };
        export function loadMoreEvent_1(): null;
        export { loadMoreEvent_1 as loadMoreEvent };
        export namespace i18n_1 {
            const loadmore: string;
        }
        export { i18n_1 as i18n };
    }
}
import PropTypes from "prop-types";
