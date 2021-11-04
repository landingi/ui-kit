/**
 * HasNumber - check if string include any lowercase character
 * @function hasNumber
 * @param {string} string - test string
 * @return {bool} return true or false
 */
export const hasNumber = str => Boolean(str && /\d/.test(str))
