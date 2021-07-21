/**
 * Months array - contains array of month objects with code and translation key
 */
export const monthsArray = [
  { code: '00', name: 'month.january' },
  { code: '01', name: 'month.february' },
  { code: '02', name: 'month.march' },
  { code: '03', name: 'month.april' },
  { code: '04', name: 'month.may' },
  { code: '05', name: 'month.june' },
  { code: '06', name: 'month.july' },
  { code: '07', name: 'month.august' },
  { code: '08', name: 'month.september' },
  { code: '09', name: 'month.october' },
  { code: '10', name: 'month.november' },
  { code: '11', name: 'month.december' }
]

/**
 * Check if value is between start and end month
 * @function handleRangeMarker
 * @param {string} monthID
 * @param {string} endMonth
 * @param {string} startMonth
 * @return {bool} Returns bool
 */
export const handleRangeMarker = (monthID, endMonth, startMonth) => {
  const handleMarkerWithBiggerStartMonth = () => endMonth <= monthID && startMonth >= monthID
  const handleMarkerWithBiggerEndMonth = () => startMonth <= monthID && endMonth >= monthID
  const handleMarkerWithEqualStartEndMonth = () => monthID === startMonth

  switch (true) {
    case startMonth === null || endMonth === null:
      return null
    case startMonth > endMonth:
      return handleMarkerWithBiggerStartMonth()
    case startMonth < endMonth:
      return handleMarkerWithBiggerEndMonth()
    case startMonth === endMonth:
      return handleMarkerWithEqualStartEndMonth()
    default:
      return false
  }
}

/**
 * Parse date object to monthID eg. 2021-03-20 => 202103
 * @function parseDateToMonthID
 * @param {date} date
 * @return {string} Returns string
 */
export const parseDateToMonthID = date => `${date.getFullYear()}${monthsArray[date.getMonth()].code}`

/**
 * Parse monthID to date object eg. 202103 => 2021-03-01
 * @function parseDateToMonthID
 * @param {string} monthID
 * @return {date} Returns date object
 */
export const transformMonthToDate = monthID => new Date(`${monthID}`.substring(0, 4), `${monthID}`.substring(4, 6))
