export type ClockType = 'AM' | 'PM' | null;
/**
 * convert am/pm to 0-23 and vice versa
 */
export declare const processTime: (time: string, clockType?: ClockType) => string;
/**
 * convert string time value in 24 hour format to 12 hour format
 * eg. '23:30' => '11:30'
 */
export declare const convertTimeFrom24to12: (time24: string) => string;
/**
 * check if current time is am or pm if clock time is am/pm
 */
export declare const isAmOrPm: (time: string, isAmPmType: boolean) => "AM" | "PM" | null;
