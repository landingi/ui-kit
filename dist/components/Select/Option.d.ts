export default Option;
/**
 * Select option - stateless presentational component
 * @param {object} props - props
 * @param {string} props.className - list of class names, default: select__option
 * @param {string|number} props.value - click handler
 * @param {string} props.label
 * @return {object} An object of children element
 */
declare function Option({ className, value, label }: {
    className: string;
    value: string | number;
    label: string;
}): object;
declare namespace Option {
    const displayName: string;
    namespace propTypes {
        const className: any;
        const label: any;
        const value: any;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
    }
}
