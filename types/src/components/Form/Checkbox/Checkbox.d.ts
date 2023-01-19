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
        const className: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        const type: PropTypes.Requireable<string>;
        const field: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            name: PropTypes.Validator<string>;
            value: PropTypes.Requireable<boolean>;
            onChange: PropTypes.Requireable<(...args: any[]) => any>;
            onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        }>>>;
        const form: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            errors: PropTypes.Requireable<Object>;
            touched: PropTypes.Requireable<Object>;
            setFieldValue: PropTypes.Requireable<(...args: any[]) => any>;
        }>>>;
        const id: PropTypes.Validator<string>;
        const label: PropTypes.Requireable<any>;
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
import PropTypes from "prop-types";
