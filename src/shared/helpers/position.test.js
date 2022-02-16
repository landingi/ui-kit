import { centerParent, isInViewVertical } from '@helpers/position'

describe('Helpers centerParent', () => {
  it('should return a number', () => {
    expect(typeof centerParent(0, 0, 0)).toBe('number')
  })

  it('isNaN return 0', () => {
    expect(centerParent(NaN, '1', '2')).toEqual(0)
  })
})

describe('Helper isInViewVertical', () => {
  it('Should return true if element is in view vertical', () => {
    global.document.clientHeight = 1200

    const div = document.createElement('div')

    document.documentElement.clientHeight = 1200

    div.getBoundingClientRect = jest.fn(() => ({
      height: 300,
      top: 1000,
      bottom: 200
    }))

    // zamockować clientHeight dla document.documentelement w teście

    // expect(isInViewVertical(div)).toBe(true)
  })
})
