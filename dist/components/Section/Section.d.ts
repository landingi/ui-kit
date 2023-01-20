export default Section;
/**
 * Section - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: section
 * @param {object} props.children - children
 * @param {string} props.space - Space
 * @param {string} props.width - width
 * @param {string} props.background - style
 * @return {object} An object of children element
 */
declare function Section({ className, children, space, width, background }: {
    className: string | array;
    children: object;
    space: string;
    width: string;
    background: string;
}): object;
declare namespace Section {
    const displayName: string;
    namespace propTypes {
        const background: any;
        const children: any;
        const className: any;
        const space: any;
        const width: any;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
        const background_1: string;
        export { background_1 as background };
        const space_1: string;
        export { space_1 as space };
        const width_1: string;
        export { width_1 as width };
    }
}
