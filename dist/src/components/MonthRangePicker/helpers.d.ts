/**
 * Months array - contains array of month objects with code and translation key
 */
export declare const monthsArray: readonly [{
    readonly code: "00";
    readonly name: "month.january";
}, {
    readonly code: "01";
    readonly name: "month.february";
}, {
    readonly code: "02";
    readonly name: "month.march";
}, {
    readonly code: "03";
    readonly name: "month.april";
}, {
    readonly code: "04";
    readonly name: "month.may";
}, {
    readonly code: "05";
    readonly name: "month.june";
}, {
    readonly code: "06";
    readonly name: "month.july";
}, {
    readonly code: "07";
    readonly name: "month.august";
}, {
    readonly code: "08";
    readonly name: "month.september";
}, {
    readonly code: "09";
    readonly name: "month.october";
}, {
    readonly code: "10";
    readonly name: "month.november";
}, {
    readonly code: "11";
    readonly name: "month.december";
}];
/**
 * Check if value is between start and end month
 * @function handleRangeMarker
 * @param {number} monthID
 * @param {string} endMonth
 * @param {string} startMonth
 * @return {bool} Returns bool
 */
export declare const handleRangeMarker: (monthID: number, endMonth: number, startMonth: number) => boolean;
/**
 * Parse date object to monthID eg. 2021-03-20 => 202103
 * @function parseDateToMonthID
 * @param {date} date
 * @return {string} Returns string
 */
export declare const parseDateToMonthID: (date: Date) => number;
/**
 * Parse monthID to date object eg. 202103 => 2021-03-01
 * @function parseDateToMonthID
 * @param {number} monthID
 * @return {date} Returns date object
 */
export declare const transformMonthToDate: (monthID: number) => Date;
