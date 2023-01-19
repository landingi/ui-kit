export default FieldGroup;
/**
 * Field Group  - stateless presentational component
 * @param {object} props - props
 * @param {object} props.errors
 * @param {object} props.touched
 * @param {string} props.label
 * @param {string} props.name
 * @param {object} props.children
 * @return {object} An object of children element
 */
declare function FieldGroup({ errors, touched, label, name, children }: {
    errors: object;
    touched: object;
    label: string;
    name: string;
    children: object;
}): object;
declare namespace FieldGroup {
    const displayName: string;
    namespace propTypes {
        const children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        const touched: PropTypes.Requireable<object>;
        const label: PropTypes.Requireable<string>;
        const name: PropTypes.Validator<string>;
        const errors: PropTypes.Requireable<object>;
    }
    namespace defaultProps {
        const label_1: string;
        export { label_1 as label };
        const errors_1: {};
        export { errors_1 as errors };
        const touched_1: {};
        export { touched_1 as touched };
    }
}
import PropTypes from "prop-types";