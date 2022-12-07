import { centerParent } from '@helpers/position'

describe('Helpers centerParent', () => {
  it('should return a number', () => {
    expect(typeof centerParent(0, 0, 0)).toBe('number')
  })

  it('isNaN return 0', () => {
    expect(centerParent(NaN, '1', '2')).toEqual(0)
  })
})
