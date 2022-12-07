import {
  formatNumeric,
  getDateObject,
  getTodayDate,
  isLastPage,
  queryString
} from '@helpers/data'

describe('Date helpers', () => {
  it('should return today Date', () => {
    expect(getTodayDate()).toEqual(new Date(new Date().setHours(0, 0, 0, 0)))
  })

  it('should return date object', () => {
    expect(getDateObject(new Date('1998-04-25T09:15:00'))).toEqual({
      day: 25,
      month: 'april',
      year: 1998
    })
  })

  it('should format number', () => {
    expect(formatNumeric(10000)).toEqual('10 000')
    expect(formatNumeric(100)).toEqual('100')
    expect(formatNumeric(1000000)).toEqual('1 000 000')
    expect(formatNumeric(5789)).toEqual('5 789')
  })

  it('should return false when count of last page is 0', () => {
    expect(isLastPage(0, 1, 10)).toEqual(false)
  })

  it('should return false when count divided by limit is not equal to page', () => {
    expect(isLastPage(10, 2, 10)).toEqual(false)
  })

  it('should return true if it is last page', () => {
    expect(isLastPage(10, 1, 10)).toEqual(true)
  })

  it('should return proper encoded query string', () => {
    const obj = {
      a: 'jestem wartoscia a',
      b: 'jestem wartoscia b'
    }

    expect(queryString(obj)).toEqual(
      'a=jestem%20wartoscia%20a&b=jestem%20wartoscia%20b'
    )
  })
})
