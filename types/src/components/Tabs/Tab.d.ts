export default Tab;
/**
 * Tab - stateless presentational component
 * @param {object} props - props
 * @param {string} props.name - name
 * @param {string|array} props.className - list of class names, default: `tab`
 * @param {function} props.onClick - onClick handler
 * @param {bool} props.isDisabled - is opening tab disabled
 * @param {object} props.children - children
 * @param {string|array|object} props.restProps - rest of props
 * @return {object} An object of children element
 */
declare function Tab({ name, className, onClick, isDisabled, children, ...restProps }: {
    name: string;
    className: string | array;
    onClick: Function;
    isDisabled: bool;
    children: object;
    restProps: string | array | object;
}): object;
declare namespace Tab {
    const displayName: string;
    namespace propTypes {
        const onClick: PropTypes.Requireable<(...args: any[]) => any>;
        const name: PropTypes.Validator<string>;
        const className: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        const children: PropTypes.Validator<NonNullable<NonNullable<((...args: any[]) => any) | PropTypes.ReactNodeLike>>>;
        const isDisabled: PropTypes.Requireable<boolean>;
        const onDisabledClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
        export function onClick_1(): null;
        export { onClick_1 as onClick };
        const isDisabled_1: boolean;
        export { isDisabled_1 as isDisabled };
    }
}
import PropTypes from "prop-types";
