import { AM, PM } from './constants'

/**
 * convert am/pm to 0-23 and vice versa
 */
export const processTime = (time, clockType) => {
  if (clockType) {
    const [hours, minutes] = time.split(':')
    const hoursNum = Number(hours)

    if (clockType === AM && hoursNum >= 12) {
      return `${Number(hoursNum) - 12}:${minutes}`
    }

    if (clockType === PM && hoursNum < 12) {
      return `${Number(hoursNum) + 12}:${minutes}`
    }

    if (clockType === PM && hoursNum === 12) {
      return `${12}:${minutes}`
    }

    return time
  }

  return time
}

/**
 * Convert string time value in 24 hour format to 12 hour format
 * eg. '23:30' => '11:30'
 * @param {string} time24
 * @returns {string} an string with formated hour
 */
export const convertTimeFrom24to12 = time24 => {
  const [sHours, minutes] = time24.match(/([0-9]{1,2}):([0-9]{2})/).slice(1)
  let hours = +sHours % 12 || 12

  if (hours < 10) {
    hours = `0${hours}`
  }

  return `${hours}:${minutes}`
}
/**
 * check if current time is am or pm if clocl time is am/pm non 0-23
 */
export const isAmOrPm = (time, isAmPmType) => {
  const [hours] = time.split(':')

  const hoursNum = Number(hours)

  if (isAmPmType && hoursNum >= 12) {
    return PM
  } else if (isAmPmType && hoursNum < 12) {
    return AM
  } else {
    return null
  }
}
