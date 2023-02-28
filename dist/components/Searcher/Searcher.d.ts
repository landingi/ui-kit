import { FC } from 'react';
interface SearcherProps {
    setSearchResult?: (value?: unknown) => void;
    searchFunction?: (value?: string) => Promise<unknown>;
    setSearchPhrase?: (value?: string) => void;
    i18n?: {
        placeholder?: string;
        label?: string;
    };
    protectedSubmit?: boolean;
    liveChanges?: boolean;
}
export declare const Searcher: FC<SearcherProps>;
export {};
