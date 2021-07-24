/**
 * hasLowerCase - check if string include any lowercase character
 * @function hasLowerCase
 * @param {string} string - test string
 * @return {bool} return true or false
 */
export const hasLowerCase = str =>
  !!(str && str.toUpperCase() !== str && str.length > 0)

/**
 * hasUpperCase - check if string include any lowercase character
 * @function hasUpperCase
 * @param {string} string - test string
 * @return {bool} return true or false
 */
export const hasUpperCase = str =>
  !!(str && str.toLowerCase() !== str && str.length > 0)

/**
 * hasNumber - check if string include any lowercase character
 * @function hasNumber
 * @param {string} string - test string
 * @return {bool} return true or false
 */
export const hasNumber = str => !!(str && /\d/.test(str))
