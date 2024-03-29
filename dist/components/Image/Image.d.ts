/// <reference types="react" />
interface ImageProps {
    src: string;
    alt?: string;
    className?: string | string[];
    size?: `${number}px` | `${string}%` | 'auto';
    height?: number;
    auto?: boolean;
    small?: boolean;
    loadingAttr?: 'lazy' | 'eager';
    draggable?: boolean;
}
declare const _default: import("react").NamedExoticComponent<ImageProps>;
export default _default;
