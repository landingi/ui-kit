import { parse, isDate } from 'date-fns'

export const dateTimeFormat = (date, locale) =>
  new Intl.DateTimeFormat(locale).format(date)

export const parseDateString = (value, originalValue) => {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'MM / yy', new Date())
  return parsedDate
}
