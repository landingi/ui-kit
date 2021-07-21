/**
 * @param {array} arrays
 * @return {array} Returns an array that is the intersection of all the arrays.
 * Each value in the result is present in each of the arrays.
 */
export const intersection = arrays => arrays.reduce((a, b) => a.filter(c => b.includes(c)))

/**
 * @param {array} arrays
 * @return {array} Returns the values from array that are not present in the other arrays.
 */
export const difference = arrays => arrays.reduce((a, b) => a.filter(c => !b.includes(c)))
