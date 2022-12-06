import { debounce, throttle } from '@helpers/events'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.clearAllTimers()
})

describe('Helpers events, `debounce`', () => {
  let func = jest.mock
  let debouncedFunc: (...args: unknown[]) => void

  beforeEach(() => {
    func = jest.fn()
    debouncedFunc = debounce(func, 500)
  })

  it('should return typeof function', () => {
    expect(typeof debouncedFunc).toBe('function')
  })

  it('should not have been called yet', () => {
    debouncedFunc()
    expect(func).not.toBeCalled()
  })

  it('should not have been called yet', () => {
    debouncedFunc()
    expect(func).not.toBeCalled()
  })

  it('call immediately once', () => {
    debouncedFunc()
    jest.runAllTimers()
    expect(func).toHaveBeenCalledTimes(1)
  })

  it('should be called three times', () => {
    for (let i = 0; i < 3; i++) {
      debouncedFunc()
      jest.advanceTimersByTime(500)
    }
    expect(func).toHaveBeenCalledTimes(3)
  })
})

describe('Helpers events, `throttle`', () => {
  let func = jest.mock
  let throttledFunc: (...args: unknown[]) => void

  beforeEach(() => {
    func = jest.fn()
    throttledFunc = throttle(func, 500)
  })

  it('should return typeof function', () => {
    expect(typeof throttledFunc).toBe('function')
  })

  it('call immediately once', () => {
    throttledFunc()
    jest.runAllTimers()
    expect(func).toHaveBeenCalledTimes(1)
  })

  it('should be called once', () => {
    for (let i = 0; i < 3; i++) {
      throttledFunc()
    }
    jest.advanceTimersByTime(1000)
    expect(func).toHaveBeenCalledTimes(1)
  })
})
