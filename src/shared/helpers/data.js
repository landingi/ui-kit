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
 * Check if variable is iterable
 * @function isIterable
 * @param {any} variable
 * @return {bool} Returns bool
 */
export const isIterable = obj => {
  if (obj == null) {
    return false
  }

  return typeof obj[Symbol.iterator] === 'function'
}

/**
 * Check that the arrays are the same
 * @function isArrayEqual
 * @param {array} arr1 - first array
 * @param {array} arr2 - second array
 * @return {bool} Returns bool
 *
 * NOTE: function was tested only for array of numbers,
 * order of elements is not important
 * eg.
 * [1,2], [1,2] -> true
 * [1,2], [2,1] -> true
 * [1,2], [2,3] -> false
 */
export const isArrayEqual = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.reduce((a, b) => a && arr2.includes(b), true)
  )
}

/**
 * Check that the arrays are the same
 * @function isSetEqual
 * @param {Set} a - first Set
 * @param {Set} b - second Set
 * @return {bool} Returns bool
 */
export const isSetEqual = (a, b) =>
  a.size === b.size && [...a].every(value => b.has(value))

/**
 * font icons mapper
 * @const fontIcons
 * @return {object}
 */
const fontIcons = {
  success: 'check',
  warning: 'exclamation',
  info: 'info',
  alert: 'times'
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
 * Map an object to array of objects
 * @function mapObjectToArrObj
 * @param {object} obj
 * @return {array} Returns string
 */
export const mapObjectToArrObj = obj =>
  Object.keys(obj)
    .filter(value => obj[value] != null)
    .map(key => ({
      [key]: obj[key]
    }))

/**
 * isLastPage - check if last page
 * @param {number} count - meta total
 * @param {number} page
 * @param {number} limit - limit per page
 * @type {function}
 */
export const isLastPage = (count, page, limit) =>
  count !== 0 && Math.ceil(count / limit) === page

/**
 * getTodayDate - return today date with hour 00:00:00
 * @type {function}
 */
export const getTodayDate = () => new Date(new Date().toDateString())

/**
 * getAgoDate - return date {number} days ago with hour 00:00:00
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
 * getTodayDateTimestamp - return today date with hour 00:00:00 as timestamp
 * @type {function}
 */
export const getTodayDateTimestamp = () => getTodayDate().getTime() / 1000

/**
 * getAgoDateTimestamp - return date {number} days ago with hour 00:00:00 as timestamp
 * @param {number} days - days ago
 * @type {function}
 */
export const getAgoDateTimestamp = days => getAgoDate(days).getTime() / 1000

/**
 * getTimestamp - return timestamp from date
 * @param {number} date - date
 * @type {function}
 */
export const getTimestamp = date => date.getTime() / 1000

/**
 * getDateObject - return date as a object {day, month, year}
 * @param {number} date - date
 * @type {function}
 */
export const getDateObject = date => {
  return {
    day: date.getDate(),
    month: mapNumberToMonth(date.getMonth()),
    year: date.getFullYear()
  }
}

/**
 * Months mapper
 * @const months
 * @return {object}
 */
const months = {
  0: 'january',
  1: 'february',
  2: 'march',
  3: 'april',
  4: 'may',
  5: 'june',
  6: 'july',
  7: 'august',
  8: 'september',
  9: 'october',
  10: 'november',
  11: 'december'
}

/**
 * Maps number to month
 * @function mapNumberToMonth
 * @param {number} value
 * @return {string} Returns string
 */
const mapNumberToMonth = value => months[value]

/**
 * lead origin types mapper
 * @const filterType
 * @return {object}
 */
const leadTypes = {
  'all.campaigns': null,
  'landings.campaigns': 'landing',
  'popups.campaigns': 'popup'
}

/**
 * Maps lead type to filter
 * @function mapLeadsTypes
 * @param {number} value
 * @return {string} Returns string
 */
export const mapLeadsTypes = value => leadTypes[value]

/**
 * Check if domain is a root domain
 * IMPORTANT: this function can be used only for domains preprocessed on backend
 * root domain not contains 'www.', even if user type www. in database domain is saved without www.
 * @function isRootDomain
 * @param {string} domain
 * @return {bool} Returns true if domain is root domain
 */
export const isRootDomain = domain => {
  return domain.split('.').length === 2
}

/**
 * Default labels for filters in table
 * @return {string}
 */
export const defaultLabels = {
  landing_info: '-created_at',
  all_types: '2',
  product_info: 'created_at'
}

/**
 * Format price
 * ex. 10000 => 10 000
 * @return {string}
 */
export const formatPrice = value =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

/**
 * groupArrayOfObjectsBy
 * ex groupArrayOfObjectsBy(array, 'keyName')
 * @return {object}
 */
export const groupArrayOfObjectsBy = (array, key) =>
  array.reduce((rv, x) => {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})

/**
 * Format numeric
 * ex. 10000 => 10 000
 * @return {string}
 */
export const formatNumeric = value =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

/**
 * @param {object} startDate
 * @param {object} endDate
 *
 * @return {string} difference between given dates in days
 */
export const calculateDaysInterval = (startDate, endDate) =>
  Math.ceil(Math.abs(startDate - endDate) / (1000 * 60 * 60 * 24))
