import { AM, PM } from './constants'

export type ClockType = 'AM' | 'PM' | null

/**
 * convert am/pm to 0-23 and vice versa
 */
export const processTime = (time: string, clockType?: ClockType) => {
  if (clockType) {
    const [hours, minutes] = time.split(':')
    const hoursNum = Number(hours)

    if (clockType === AM && hoursNum >= 12) {
      const hh = Number(hoursNum) - 12 === 0 ? '00' : Number(hoursNum) - 12
      return `${hh}:${minutes}`
    }

    if (clockType === PM && hoursNum < 12) {
      return `${Number(hoursNum) + 12}:${minutes}`
    }

    if (clockType === PM && hoursNum === 12) {
      return `12:${minutes}`
    }

    return time
  }

  return time
}

/**
 * convert string time value in 24 hour format to 12 hour format
 * eg. '23:30' => '11:30'
 */
export const convertTimeFrom24to12 = (time24: string) => {
  const [sHours, minutes] = time24
    .match(/([0-9]{1,2}):([0-9]{2})/)
    ?.slice(1) as string[]

  const hours = +sHours % 12 || 12

  if (hours < 10) {
    return `0${hours}:${minutes}`
  }

  return `${hours}:${minutes}`
}
/**
 * check if current time is am or pm if clock time is am/pm
 */
export const isAmOrPm = (time: string, isAmPmType: boolean) => {
  const [hours] = time.split(':')

  const hoursNum = Number(hours)

  if (isAmPmType && hoursNum >= 12) {
    return PM
  }
  if (isAmPmType && hoursNum < 12) {
    return AM
  }

  return null
}
