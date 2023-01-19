export default ShowPassword;
/**
 * ShowPassword - stateful presentational component
 * @param {object} props - props
 * @param {string|array} props.className
 * @param {bool} props.setHidden
 * @param {bool} props.hasLabel
 * @param {object} props.i18n
 * @return {object} An object of children element
 */
declare function ShowPassword({ className, setHidden, hasLabel, i18n }: {
    className: string | array;
    setHidden: bool;
    hasLabel: bool;
    i18n: object;
}): object;
declare namespace ShowPassword {
    const displayName: string;
    namespace propTypes {
        const className: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        const hasLabel: PropTypes.Requireable<boolean>;
        const setHidden: PropTypes.Requireable<(...args: any[]) => any>;
        const i18n: PropTypes.Requireable<PropTypes.InferProps<{
            show: PropTypes.Requireable<string>;
            hide: PropTypes.Requireable<string>;
        }>>;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
        const hasLabel_1: boolean;
        export { hasLabel_1 as hasLabel };
        export function setHidden_1(): null;
        export { setHidden_1 as setHidden };
        export namespace i18n_1 {
            const show: string;
            const hide: string;
        }
        export { i18n_1 as i18n };
    }
}
import PropTypes from "prop-types";
