/**
 * HasLowerCase - check if string include any lowercase character
 * @function hasLowerCase
 * @param {string} string - test string
 * @return {bool} return true or false
 */
export const hasLowerCase = str =>
  Boolean(
    str && str.toUpperCase() !== str && str.length > 0
  )

/**
 * HasUpperCase - check if string include any lowercase character
 * @function hasUpperCase
 * @param {string} string - test string
 * @return {bool} return true or false
 */
export const hasUpperCase = str =>
  Boolean(
    str && str.toLowerCase() !== str && str.length > 0
  )

/**
 * HasNumber - check if string include any lowercase character
 * @function hasNumber
 * @param {string} string - test string
 * @return {bool} return true or false
 */
export const hasNumber = str =>
  Boolean(str && /\d/.test(str))
