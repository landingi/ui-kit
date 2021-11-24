import { getMessages } from '@helpers/i18n'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.clearAllTimers()
})

describe('Helpers events, `getMessages`', () => {
  it('should return typeof object', () => {
    expect(typeof getMessages).toBe('object')
  })
})
