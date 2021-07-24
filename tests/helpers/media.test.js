import '../setup/mocks/matchMedia.mock'
import { isMediaQuery } from 'shared/helpers/media'
import { breakpoints } from 'shared/constants/breakpoints'

describe('Helpers isMediaQuery()', () => {
  it('returns boolean', () => {
    expect(typeof isMediaQuery(breakpoints.mobile)).toBe('boolean')
  })
})
