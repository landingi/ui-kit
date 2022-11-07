/**
 * Check if value is empty
 * @function isEmpty
 * @param {array|object} parentWidth
 * @return {bool} Returns bool
 */
export const isEmpty = value =>
  value === null ||
  value === undefined ||
  // eslint-disable-next-line no-prototype-builtins
  (value.hasOwnProperty('length') && value.length === 0) ||
  (value.constructor === Object && Object.keys(value).length === 0)

/**
 * Font icons mapper
 * @const fontIcons
 * @return {object}
 */
const fontIcons = {
  alert: 'icon-remove',
  info: 'icon-info',
  success: 'icon-ok',
  warning: 'icon-exclamation'
}

/**
 * Maps icons to class name
 * @function mapIconToClass
 * @param {string} value
 * @return {string} Returns string
 */
export const mapIconToClass = value => fontIcons[value]

/**
 * Convert json to query string.
 * @function queryString
 * @param {string} data
 * @return {string} Returns string
 */

export const queryString = data =>
  Object.entries(data)
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join('&')

/**
 * IsLastPage - check if last page
 * @param {number} count - meta total
 * @param {number} page
 * @param {number} limit - limit per page
 * @type {function}
 */
export const isLastPage = (count, page, limit) =>
  count !== 0 && Math.ceil(count / limit) === page

/**
 * GetTodayDate - return today date with hour 00:00:00
 * @type {function}
 */
export const getTodayDate = () => new Date(new Date().toDateString())

/**
 * GetAgoDate - return date {number} days ago with hour 00:00:00
 * @param {number} days - days ago
 * @type {function}
 */
export const getAgoDate = days => {
  const today = getTodayDate()

  return new Date(
    new Date(new Date().setDate(today.getDate() - days)).toDateString()
  )
}

/**
 * GetDateObject - return date as a object {day, month, year}
 * @param {number} date - date
 * @type {function}
 */
export const getDateObject = date => ({
    day: date.getDate(),
    month: mapNumberToMonth(date.getMonth()),
    year: date.getFullYear()
  })

/**
 * Months mapper
 * @const months
 * @return {object}
 */
const months = {
  0: 'january',
  1: 'february',
  10: 'november',
  11: 'december',
  2: 'march',
  3: 'april',
  4: 'may',
  5: 'june',
  6: 'july',
  7: 'august',
  8: 'september',
  9: 'october'
}

/**
 * Maps number to month
 * @function mapNumberToMonth
 * @param {number} value
 * @return {string} Returns string
 */
const mapNumberToMonth = value => months[value]

/**
 * Format numeric
 * ex. 10000 => 10 000
 * @return {string}
 */
export const formatNumeric = value =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

/**
 * Access a deep value inside a object
 * Works by passing a path like "foo.bar.xyz"
 */
export const getDeepValue = (obj, path) =>
  path.split('.').reduce((r, val) => (r ? r[val] : undefined), obj)
