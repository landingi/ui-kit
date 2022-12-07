import { hasNumber } from '@helpers/string'

describe('String helpers', () => {
  it('should check if string contains number', () => {
    expect(hasNumber('aaA')).toEqual(false)
    expect(hasNumber('34aaA')).toEqual(true)
    expect(hasNumber('aaa32')).toEqual(true)
  })
})
