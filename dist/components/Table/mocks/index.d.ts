import { Column } from '@components/Table/types';
export type Item = {
    identifier: string;
    name: string;
    url: string;
};
export declare const mockData: Item[];
export declare const mockDataWithPagination: Item[];
export declare const columns: Column<Item>[];
export declare const i18n: {
    selected: string;
    first: string;
    last: string;
};
