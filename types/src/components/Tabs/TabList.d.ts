export default TabList;
/**
 * TabList - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `tab__list`
 * @param {object} props.children - children
 * @param {string|array|object} props.restProps - rest of props
 * @return {object} An object of children element
 */
declare function TabList({ className, children, ...restProps }: {
    className: string | array;
    children: object;
    restProps: string | array | object;
}): object;
declare namespace TabList {
    const displayName: string;
    namespace propTypes {
        const className: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        const children: PropTypes.Validator<NonNullable<NonNullable<((...args: any[]) => any) | PropTypes.ReactNodeLike>>>;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
    }
}
import PropTypes from "prop-types";
