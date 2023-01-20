export default MaskedInput;
/**
 * Masked Input - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: input
 * @param {function} props.onChange - click handler
 * @param {function} props.onKeyDown - key down handler
 * @param {function} props.onBlur - blur handler
 * @param {string} props.type - type
 * @param {string|object} props.placeholder - placeholder
 * @param {string} props.name - name
 * @param {boolean} props.disabled - disabled
 * @param {boolean} props.readonly - readonly
 * @param {string} props.label - label
 * @param {bool} props.autoFocus - autoFocus
 * @param {string} props.mask - mask applied to input
 * @param {number} props.maxLength - max length of input
 * @param {object} props.field - formik field
 * @param {bool}  props.guide - if it is true underscores will be displayed to represent mask format
 * @param {string} props.focused - focused, keep label by default on top
 * @param {string|number} props.value - value
 * @param {object} props.i18n - translations
 * @param {bool} props.alwaysShowLabel - when true label is shown even when input is empty
 * @return {object} An object of children element
 */
declare function MaskedInput({ className, onChange, onKeyDown, onBlur, type, name, disabled, readonly, value, autoFocus, maxLength, mask, guide, focused, i18n: { placeholder, label }, alwaysShowLabel }: {
    className: string | array;
    onChange: Function;
    onKeyDown: Function;
    onBlur: Function;
    type: string;
    placeholder: string | object;
    name: string;
    disabled: boolean;
    readonly: boolean;
    label: string;
    autoFocus: bool;
    mask: string;
    maxLength: number;
    field: object;
    guide: bool;
    focused: string;
    value: string | number;
    i18n: object;
    alwaysShowLabel: bool;
}): object;
declare namespace MaskedInput {
    const displayName: string;
    namespace propTypes {
        const className: any;
        const onChange: any;
        const onKeyDown: any;
        const onBlur: any;
        const type: any;
        const placeholder: any;
        const name: any;
        const disabled: any;
        const readonly: any;
        const label: any;
        const value: any;
        const autoFocus: any;
        const maxLength: any;
        const mask: any;
        const guide: any;
        const focused: any;
        const i18n: any;
        const alwaysShowLabel: any;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
        export function onChange_1(): null;
        export { onChange_1 as onChange };
        export function onKeyDown_1(): null;
        export { onKeyDown_1 as onKeyDown };
        export function onBlur_1(): null;
        export { onBlur_1 as onBlur };
        const type_1: string;
        export { type_1 as type };
        const placeholder_1: string;
        export { placeholder_1 as placeholder };
        const name_1: null;
        export { name_1 as name };
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        const readonly_1: boolean;
        export { readonly_1 as readonly };
        const label_1: null;
        export { label_1 as label };
        const value_1: null;
        export { value_1 as value };
        const autoFocus_1: boolean;
        export { autoFocus_1 as autoFocus };
        const maxLength_1: number;
        export { maxLength_1 as maxLength };
        const mask_1: never[];
        export { mask_1 as mask };
        const guide_1: boolean;
        export { guide_1 as guide };
        const focused_1: string;
        export { focused_1 as focused };
        export namespace i18n_1 {
            const placeholder_2: string;
            export { placeholder_2 as placeholder };
            const label_2: string;
            export { label_2 as label };
        }
        export { i18n_1 as i18n };
        const alwaysShowLabel_1: boolean;
        export { alwaysShowLabel_1 as alwaysShowLabel };
    }
}
