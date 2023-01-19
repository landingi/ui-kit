export default Masked;
/**
 * Masked Input - stateless presentational component
 * @param {object} props - props
 * @param {object} props.field - react-formik field properties
 * @param {object} props.form - react-formik form properties
 * @param {string} props.id - id of the element
 * @param {string} props.label - label
 * @param {string} props.placeholder - placeholder
 * @param {string} props.type - type of element `text, number etc`
 * @param {bool} props.translate - if label should be translated by intl
 * @param {number} props.maxLength - maxLength
 * @param {disabled} props.disabled - disabled
 * @param {array} props.mask - mask applied to input
 * @param {bool} props.guide - if it is true underscores will be displayed to represent mask format
 * @param {string} props.focused - focused, keep label by default on top
 * @param {object} props.i18n - translations
 * @param {bool} props.alwaysShowLabel - when true label is shown even when input is empty
 * @return {object} An object of children element
 */
declare function Masked({ field, form, id, type, disabled, translate, maxLength, mask, guide, focused, i18n, alwaysShowLabel }: {
    field: object;
    form: object;
    id: string;
    label: string;
    placeholder: string;
    type: string;
    translate: bool;
    maxLength: number;
    disabled: any;
    mask: array;
    guide: bool;
    focused: string;
    i18n: object;
    alwaysShowLabel: bool;
}): object;
declare namespace Masked {
    const displayName: string;
    namespace propTypes {
        const field: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            name: PropTypes.Validator<string>;
            value: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
            onChange: PropTypes.Requireable<(...args: any[]) => any>;
            onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        }>>>;
        const form: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            errors: PropTypes.Requireable<Object>;
            touched: PropTypes.Requireable<Object>;
        }>>>;
        const id: PropTypes.Validator<string>;
        const label: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        const placeholder: PropTypes.Requireable<string>;
        const type: PropTypes.Requireable<string>;
        const disabled: PropTypes.Requireable<boolean>;
        const translate: PropTypes.Requireable<boolean>;
        const maxLength: PropTypes.Requireable<number>;
        const mask: PropTypes.Requireable<(NonNullable<string | RegExp | null | undefined> | null | undefined)[]>;
        const guide: PropTypes.Requireable<boolean>;
        const focused: PropTypes.Requireable<string>;
        const i18n: PropTypes.Requireable<PropTypes.InferProps<{
            placeholder: PropTypes.Requireable<string>;
            label: PropTypes.Requireable<string>;
        }>>;
        const alwaysShowLabel: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const label_1: string;
        export { label_1 as label };
        const placeholder_1: string;
        export { placeholder_1 as placeholder };
        const type_1: string;
        export { type_1 as type };
        const maxLength_1: number;
        export { maxLength_1 as maxLength };
        const mask_1: never[];
        export { mask_1 as mask };
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        const translate_1: boolean;
        export { translate_1 as translate };
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
import PropTypes from "prop-types";