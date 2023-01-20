export default Textarea;
/**
 * Textarea - stateless presentational component
 * @param {string | array} className - list of custom css class from out of component
 * @param {string} name - name
 * @param {string} id - id
 * @param {string} value - value
 * @param {func} onChange - on change callback
 * @param {string} variant - variant
 * @param {string} size - size
 * @param {object} i18n - props with translated string
 * @param {bool} hasResize - has resize
 * @param {number} maxHeight - max height
 * @param {bool} props.disabled - disabled
 * @param {object} props.errors - react-formik errors properties
 * @param {object} props.touched - react-formik touched properties
 * @return {object} An object of children element
 */
declare function Textarea({ className, name, id, value, onChange, onBlur, variant, size, i18n, hasResize, maxHeight, disabled, errors, touched }: string | array): object;
declare namespace Textarea {
    const displayName: string;
    namespace propTypes {
        const className: any;
        const name: any;
        const id: any;
        const value: any;
        const onChange: any;
        const onBlur: any;
        const i18n: any;
        const variant: any;
        const size: any;
        const hasResize: any;
        const maxHeight: any;
        const disabled: any;
        const errors: any;
        const touched: any;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
        const size_1: string;
        export { size_1 as size };
        export function onBlur_1(): null;
        export { onBlur_1 as onBlur };
        export namespace i18n_1 {
            const label: null;
            const placeholder: null;
        }
        export { i18n_1 as i18n };
        const variant_1: string;
        export { variant_1 as variant };
        const hasResize_1: boolean;
        export { hasResize_1 as hasResize };
        const maxHeight_1: null;
        export { maxHeight_1 as maxHeight };
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        const errors_1: {};
        export { errors_1 as errors };
        const touched_1: {};
        export { touched_1 as touched };
    }
}
