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
