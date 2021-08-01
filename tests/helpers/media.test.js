import '../setup/mocks/matchMedia.mock'
import { isMediaQuery } from '@helpers/media'
import { breakpoints } from '@constants/breakpoints'

describe('Helpers isMediaQuery()', () => {
  it('returns boolean', () => {
    expect(typeof isMediaQuery(breakpoints.mobile)).toBe('boolean')
  })
})
