export default ShowMore;
/**
 * Show more/less - stateful presentational component
 * @param {object} props
 * @param {number} props.height
 * @param {object} props.children
 * @param {object} props.i18n
 * @return {object} An object of children element
 */
declare function ShowMore({ height, children, i18n }: {
    height: number;
    children: object;
    i18n: object;
}): object;
declare namespace ShowMore {
    const displayName: string;
    namespace propTypes {
        const height: any;
        const children: any;
        const i18n: any;
    }
    namespace defaultProps {
        const height_1: number;
        export { height_1 as height };
        const i18n_1: {};
        export { i18n_1 as i18n };
    }
}
