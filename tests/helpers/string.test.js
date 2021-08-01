import { hasLowerCase, hasUpperCase, hasNumber } from '@helpers/string'

describe('String helpers', () => {
  it('should check if string contains lowercase', () => {
    expect(hasLowerCase('aaA')).toEqual(true)
    expect(hasLowerCase('34aaA')).toEqual(true)
    expect(hasLowerCase('AAA')).toEqual(false)
    expect(hasLowerCase('aaa')).toEqual(true)
    expect(hasLowerCase('AAA32')).toEqual(false)
  })

  it('should check if string contains uppercase', () => {
    expect(hasUpperCase('aaA')).toEqual(true)
    expect(hasUpperCase('34aaA')).toEqual(true)
    expect(hasUpperCase('aaa')).toEqual(false)
    expect(hasUpperCase('AAA')).toEqual(true)
    expect(hasUpperCase('aaa32')).toEqual(false)
  })

  it('should check if string contains number', () => {
    expect(hasNumber('aaA')).toEqual(false)
    expect(hasNumber('34aaA')).toEqual(true)
    expect(hasNumber('aaa32')).toEqual(true)
  })
})
