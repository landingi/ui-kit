import { FC } from 'react';
export interface ShowPasswordProps {
    className?: string | string[];
    hasLabel?: boolean;
    setHidden?: (value?: string) => void;
    i18n?: {
        show?: string;
        hide?: string;
    };
}
export declare const ShowPassword: FC<ShowPasswordProps>;
