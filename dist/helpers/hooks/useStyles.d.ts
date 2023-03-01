/**
 * useStyles - hook to extract classes from CSS modules object or provide custom one's
 * @param {object} styles - object with CSS modules styles
 * @param {string | array} classNames - custom classes from outside of component
 * @returns {string} An string with extracted class names
 */
export declare const useStyles: (styles: Record<string, boolean | string | null | undefined>, classNames?: string | string[]) => string;
