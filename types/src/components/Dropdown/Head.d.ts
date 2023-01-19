export default DropdownHead;
/**
 * Dropdown Head element - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names
 * @return {object} An object of children element
 */
declare function DropdownHead({ children, className }: {
    children: object;
    className: string | array;
}): object;
declare namespace DropdownHead {
    const displayName: string;
    namespace propTypes {
        const children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        const className: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
    }
}
import PropTypes from "prop-types";
