export default SectionTile;
/**
 * SectionTile - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string} props.thumbnailUrl - thumbnail url
 * @param {function} props.onClick - onClick
 * @param {function} props.onDoubleClick - onDoubleClick
 * @param {boolean} props.isActive - onDoubleClick
 * @return {object} An object of children element
 */
declare function SectionTile({ children, thumbnailUrl, onClick, onDoubleClick, isActive }: {
    children: object;
    thumbnailUrl: string;
    onClick: Function;
    onDoubleClick: Function;
    isActive: boolean;
}): object;
declare namespace SectionTile {
    const displayName: string;
    namespace propTypes {
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const thumbnailUrl: PropTypes.Requireable<string>;
        const onClick: PropTypes.Requireable<(...args: any[]) => any>;
        const onDoubleClick: PropTypes.Requireable<(...args: any[]) => any>;
        const isActive: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const children_1: null;
        export { children_1 as children };
        const thumbnailUrl_1: string;
        export { thumbnailUrl_1 as thumbnailUrl };
        const isActive_1: boolean;
        export { isActive_1 as isActive };
        export function onClick_1(): null;
        export { onClick_1 as onClick };
        export function onDoubleClick_1(): null;
        export { onDoubleClick_1 as onDoubleClick };
    }
}
import PropTypes from "prop-types";
