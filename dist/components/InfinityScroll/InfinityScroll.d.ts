import { FC, ReactNode } from 'react';
interface InfinityScrollProps {
    className?: string | string[];
    children: ReactNode;
    loadMore: () => void;
    isLastPage?: boolean;
}
/**
 * InfinityScroll - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - content to display
 * @param {func} props.loadMore - callback function, invoked when loader is seen
 * @param {func} props.isLastPage - hide loader
 * @return {object} An object of children element
 */
export declare const InfinityScroll: FC<InfinityScrollProps>;
export {};
