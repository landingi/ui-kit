import { centerParent, isOutOfViewport } from 'shared/helpers/position'

describe('Helpers centerParent', () => {
  it('should return a number', () => {
    expect(typeof centerParent(0, 0, 0)).toBe('number')
  })

  it('isNaN return 0', () => {
    expect(centerParent(NaN, '1', '2')).toEqual(0)
  })
})

describe('Helpers isOutOfViewport', () => {
  const elemTrue = {
    left: 0,
    top: -100,
    right: 0,
    bottom: 0
  }

  const expectedTrue = {
    top: true,
    left: false,
    bottom: false,
    right: false,
    any: true,
    all: false
  }

  const elemFalse = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }

  const expectedFalse = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    any: false,
    all: false
  }

  it('should return an object', () => {
    expect(typeof isOutOfViewport(elemTrue)).toBe('object')
  })

  it('is out of viewport', () => {
    expect(isOutOfViewport(elemTrue)).toMatchObject(expectedTrue)
  })

  it('is in viewport', () => {
    expect(isOutOfViewport(elemFalse)).toMatchObject(expectedFalse)
  })
})
