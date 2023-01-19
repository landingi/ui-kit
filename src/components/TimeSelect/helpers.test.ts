import { AM, PM } from './constants'
import { convertTimeFrom24to12, isAmOrPm, processTime } from './helpers'

describe('Test processTime', () => {
  it('Return same time when am/pm in not selected', () => {
    expect(processTime('23:23')).toBe('23:23')
  })
  it('Return converted time when am is selected', () => {
    expect(processTime('23:23', AM)).toBe('11:23')
    expect(processTime('06:23', AM)).toBe('06:23')
    expect(processTime('00:23', AM)).toBe('00:23')
    expect(processTime('12:23', AM)).toBe('00:23')
  })
  it('Return converted time when pm is selected', () => {
    expect(processTime('23:23', PM)).toBe('23:23')
    expect(processTime('06:23', PM)).toBe('18:23')
    expect(processTime('12:23', PM)).toBe('12:23')
    expect(processTime('12:23', PM)).toBe('12:23')
  })
})

describe('Test convertTimeFrom24to12', () => {
  it('Return converted time', () => {
    expect(convertTimeFrom24to12('12:23')).toBe('12:23')
    expect(convertTimeFrom24to12('00:23')).toBe('12:23')
    expect(convertTimeFrom24to12('16:23')).toBe('04:23')
  })
})

describe('Test isAmOrPm', () => {
  it('Return null when in 00-24 clock', () => {
    expect(isAmOrPm('12:23', false)).toBe(null)
  })
  it('Return AM when time is < 12', () => {
    expect(isAmOrPm('00:23', true)).toBe(AM)
    expect(isAmOrPm('11:23', true)).toBe(AM)
  })
  it('Return PM when time is >= 12', () => {
    expect(isAmOrPm('16:23', true)).toBe(PM)
    expect(isAmOrPm('23:23', true)).toBe(PM)
  })
})
