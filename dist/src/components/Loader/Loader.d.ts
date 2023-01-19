import { FC } from 'react';
interface LoaderProps {
    variant?: 'default' | 'shapes';
    ['data-testid']?: string;
}
declare const Loader: FC<LoaderProps>;
export default Loader;
