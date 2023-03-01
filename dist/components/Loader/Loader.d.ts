import { FC } from 'react';
interface LoaderProps {
    className?: string | string[];
    variant?: 'default' | 'shapes';
    ['data-testid']?: string;
}
export declare const Loader: FC<LoaderProps>;
export {};
