/// <reference types="react" />
interface ImageProps {
    src: string;
    alt?: string;
    className?: string | string[];
    size?: number;
    height?: number;
    auto?: boolean;
    small?: boolean;
    loadingAttr?: 'lazy' | 'eager';
    draggable?: boolean;
}
declare const _default: import("react").NamedExoticComponent<ImageProps>;
export default _default;
