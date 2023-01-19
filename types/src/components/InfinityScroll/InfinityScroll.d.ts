export default InfinityScroll;
/**
 * InfinityScroll - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - content to display
 * @param {func} props.loadMore - callback function, invoked when loader is seen
 * @param {func} props.isLastPage - hide loader
 * @return {object} An object of children element
 */
declare function InfinityScroll({ className, children, loadMore, isLastPage }: {
    children: object;
    loadMore: func;
    isLastPage: func;
}): object;
declare namespace InfinityScroll {
    const displayName: string;
    namespace propTypes {
        const className: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        const children: PropTypes.Validator<NonNullable<NonNullable<PropTypes.ReactNodeLike>>>;
        const loadMore: PropTypes.Requireable<(...args: any[]) => any>;
        const isLastPage: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
        const isLastPage_1: boolean;
        export { isLastPage_1 as isLastPage };
        export function loadMore_1(): null;
        export { loadMore_1 as loadMore };
    }
}
import PropTypes from "prop-types";
