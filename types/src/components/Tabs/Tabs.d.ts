export default Tabs;
/**
 * Tabs - stateless presentational component
 * @param {object} props - props
 * @param {string} props.initialValue - initial value
 * @param {string|array} props.className - list of class names
 * @param {object} props.children - children
 * @param {string|array|object} props.restProps - rest of props
 * @return {object} An object of children element
 */
declare function Tabs({ initialValue, className, children, ...restProps }: {
    initialValue: string;
    className: string | array;
    children: object;
    restProps: string | array | object;
}): object;
declare namespace Tabs {
    const displayName: string;
    namespace propTypes {
        const initialValue: PropTypes.Validator<string>;
        const className: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        const children: PropTypes.Validator<NonNullable<NonNullable<((...args: any[]) => any) | PropTypes.ReactNodeLike>>>;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
    }
}
import PropTypes from "prop-types";
