export const isEmpty = (value?: string) =>
  value === null ||
  value === undefined ||
  // eslint-disable-next-line no-prototype-builtins
  (value.hasOwnProperty('length') && value.length === 0) ||
  (value.constructor === Object && Object.keys(value).length === 0)

const fontIcons = {
  alert: 'icon-remove',
  info: 'icon-info',
  success: 'icon-ok',
  warning: 'icon-exclamation'
} as const

export const mapIconToClass = (
  value: 'alert' | 'info' | 'success' | 'warning'
) => fontIcons[value]

export const queryString = (data: string) =>
  Object.entries(data)
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join('&')

export const isLastPage = (count: number, page: number, limit: number) =>
  count !== 0 && Math.ceil(count / limit) === page

export const getTodayDate = () => new Date(new Date().toDateString())

export const getAgoDate = (days: number) => {
  const today = getTodayDate()

  return new Date(
    new Date(new Date().setDate(today.getDate() - days)).toDateString()
  )
}

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
} as const

const mapNumberToMonth = (value: keyof typeof months) => months[value]

export const getDateObject = (date: Date) => ({
  day: date.getDate(),
  month: mapNumberToMonth(date.getMonth() as keyof typeof months),
  year: date.getFullYear()
})

export const formatNumeric = (value: number) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

export const getDeepValue = (obj: any, path: string) =>
  path.split('.').reduce((r, val) => (r ? r[val] : undefined), obj)

export const generateFakeUuid = () => {
  const hashTable = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  ]

  const uuid = []

  for (let i = 0; i < 35; i++) {
    if (i === 7 || i === 12 || i === 17 || i === 22) {
      uuid[i] = '-'
    } else {
      uuid[i] = hashTable[Math.floor(Math.random() * hashTable.length - 1)]
    }
  }

  return uuid.join('')
}
