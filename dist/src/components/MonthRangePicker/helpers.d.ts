/**
 * Months array - contains array of month objects with code and translation key
 */
export const monthsArray: {
    code: string;
    name: string;
}[];
export function handleRangeMarker(monthID: string, endMonth: string, startMonth: string): bool;
export function parseDateToMonthID(date: any): string;
export function transformMonthToDate(monthID: string): date;
