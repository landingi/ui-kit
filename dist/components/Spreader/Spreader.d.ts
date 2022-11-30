import { FC } from 'react';

interface SpreaderProps {
    className?: string | string[];
    spread?: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'x-large' | 'big' | 'huge';
}
/**
 * Spreader - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `spreader`
 * @param {string} props.spread - spread size
 * @return {object} An object of children element
 */
declare const Spreader: FC<SpreaderProps>;
export default Spreader;
