export default Checkbox;
/**
 * Checkbox - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: ''
 * @param {object} props.field - react-formik field properties
 * @param {object} props.form - react-formik form properties
 * @param {string} props.id - id of the element
 * @param {string} props.label - label, default: ''
 * @param {string} props.type - type of element, default: 'checkbox'
 * @return {object} An object of children element
 */
declare function Checkbox({ field: { name, value, onChange, onBlur }, form: { errors, touched }, id, label, className, type }: {
    className: string | array;
    field: object;
    form: object;
    id: string;
    label: string;
    type: string;
}): object;
declare namespace Checkbox {
    const displayName: string;
    namespace propTypes {
        const className: any;
        const type: any;
        const field: any;
        const form: any;
        const id: any;
        const label: any;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
        const label_1: string;
        export { label_1 as label };
        const type_1: string;
        export { type_1 as type };
    }
}
