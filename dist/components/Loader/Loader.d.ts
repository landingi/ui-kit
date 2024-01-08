import { FC } from 'react';
export interface LoaderProps {
    className?: string | string[];
    variant?: 'default' | 'shapes';
    ['data-testid']?: string;
}
export declare const Loader: FC<LoaderProps>;
