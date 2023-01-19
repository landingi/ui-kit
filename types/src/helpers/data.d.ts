import { Dict } from 'src/types/mapped-types.type';
export declare const isEmpty: (value?: string) => boolean;
export declare const mapIconToClass: (value: 'alert' | 'info' | 'success' | 'warning') => "icon-exclamation-triangle" | "icon-info" | "icon-ok" | "icon-exclamation";
export declare const queryString: (data: Dict<string>) => string;
export declare const isLastPage: (count: number, page: number, limit: number) => boolean;
export declare const getTodayDate: () => Date;
export declare const getAgoDate: (days: number) => Date;
export declare const getDateObject: (date: Date) => {
    day: number;
    month: "january" | "february" | "november" | "december" | "march" | "april" | "may" | "june" | "july" | "august" | "september" | "october";
    year: number;
};
export declare const formatNumeric: (value: number) => string;
export declare const getDeepValue: (obj: any, path: string) => any;
export declare const generateFakeUuid: () => string;
