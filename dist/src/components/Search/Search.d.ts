export default Search;
/**
 * Search - stateful presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `search`
 * @param {string} props.variant - variant input or button action default: `input`
 * @param {func} props.onChange - change handler
 * @param {func} props.onKeyDown - key click handler
 * @param {bool} props.autoFocus - autofocus
 * @param {object} props.children - children
 * @param {string} props.size - size of search field `small, medium, large`
 * @param {string} props.label - input label
 * @param {func} props.onSubmit - handle action on form submit
 * @param {func} props.onClean- handle action on form clean
 * @param {object} props.i18n - object of translations
 * @param {string} props.tag - tag
 * @param {func} props.onProtectedSubmit - submit triggered by enter/button but event is immidiately stopped, useful for searchers in forms
 * @param {boolean} props.submitEmptyOnBlur - submit triggered onBlur when value is empty
 * @param {string} props.defaultValue - default value of input
 * @return {object} An object of children element
 */
declare function Search({ className, variant, onChange, onKeyDown, autoFocus, children, size, onSubmit, onClean, i18n, tag: Tag, onProtectedSubmit, submitEmptyOnBlur, defaultValue }: {
    className: string | array;
    variant: string;
    onChange: func;
    onKeyDown: func;
    autoFocus: bool;
    children: object;
    size: string;
    label: string;
    onSubmit: func;
    onClean: func;
    i18n: object;
    tag: string;
    onProtectedSubmit: func;
    submitEmptyOnBlur: boolean;
    defaultValue: string;
}): object;
declare namespace Search {
    const displayName: string;
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        const onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        const size: PropTypes.Requireable<string>;
        const autoFocus: PropTypes.Requireable<boolean>;
        const variant: PropTypes.Requireable<string>;
        const i18n: PropTypes.Requireable<PropTypes.InferProps<{
            placeholder: PropTypes.Requireable<string>;
            label: PropTypes.Requireable<string>;
        }>>;
        const onSubmit: PropTypes.Requireable<(...args: any[]) => any>;
        const onClean: PropTypes.Requireable<(...args: any[]) => any>;
        const tag: PropTypes.Requireable<string>;
        const onProtectedSubmit: PropTypes.Requireable<(...args: any[]) => any>;
        const submitEmptyOnBlur: PropTypes.Requireable<boolean>;
        const defaultValue: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
        const tag_1: string;
        export { tag_1 as tag };
        const size_1: string;
        export { size_1 as size };
        const variant_1: string;
        export { variant_1 as variant };
        export namespace i18n_1 {
            const placeholder: null;
            const label: null;
        }
        export { i18n_1 as i18n };
        const children_1: null;
        export { children_1 as children };
        const onSubmit_1: null;
        export { onSubmit_1 as onSubmit };
        export function onClean_1(): null;
        export { onClean_1 as onClean };
        const onProtectedSubmit_1: null;
        export { onProtectedSubmit_1 as onProtectedSubmit };
        const autoFocus_1: boolean;
        export { autoFocus_1 as autoFocus };
        export function onChange_1(): null;
        export { onChange_1 as onChange };
        export function onKeyDown_1(): null;
        export { onKeyDown_1 as onKeyDown };
        const submitEmptyOnBlur_1: boolean;
        export { submitEmptyOnBlur_1 as submitEmptyOnBlur };
        const defaultValue_1: string;
        export { defaultValue_1 as defaultValue };
    }
}
import PropTypes from "prop-types";
