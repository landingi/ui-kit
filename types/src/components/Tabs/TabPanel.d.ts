export default TabPanel;
/**
 * TabPanel - stateless presentational component
 * @param {object} props - props
 * @param {string} props.name - name
 * @param {string|array} props.className - list of class names
 * @param {object} props.children - children
 * @param {string|array|object} props.restProps - rest of props
 * @return {object} An object of children element
 */
declare function TabPanel({ name, className, children, ...restProps }: {
    name: string;
    className: string | array;
    children: object;
    restProps: string | array | object;
}): object;
declare namespace TabPanel {
    const displayName: string;
    namespace propTypes {
        const name: PropTypes.Validator<string>;
        const className: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        const children: PropTypes.Validator<NonNullable<NonNullable<((...args: any[]) => any) | PropTypes.ReactNodeLike>>>;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
    }
}
import PropTypes from "prop-types";
