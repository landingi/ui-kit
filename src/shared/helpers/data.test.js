import { getTodayDate, getDateObject, formatNumeric } from '@helpers/data'

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
})
