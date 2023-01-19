export default Separator;
/**
 * Separator - stateless presentational component
 * @param {string|array} props.className - list of class names
 * @param {object} props.children - children
 * @param {string} props.size - size
 * @param {string} props.color - color
 * @return {object} An object of children element
 */
declare function Separator({ className, children, size, color }: string | array): object;
declare namespace Separator {
    const displayName: string;
    namespace propTypes {
        const className: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        const children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        const size: PropTypes.Requireable<string>;
        const color: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
        const size_1: string;
        export { size_1 as size };
        const color_1: string;
        export { color_1 as color };
    }
}
import PropTypes from "prop-types";
