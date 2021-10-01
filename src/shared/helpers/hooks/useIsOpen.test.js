import useIsOpen from '@helpers/hooks/useIsOpen'
import { renderHook, act } from '@testing-library/react-hooks'

test('should use useIsOpen', () => {
  const { result } = renderHook(() => useIsOpen(false))
  expect(result.current.value).toEqual(false)
})

test('should toggle one element', () => {
  const { result } = renderHook(() => useIsOpen(false))
  expect(result.current.value).toEqual(false)

  act(() => {
    result.current.toggleOneElement()
  })

  expect(result.current.value).toEqual(true)

  act(() => {
    result.current.toggleOneElement()
  })

  expect(result.current.value).toEqual(false)
})

test('should toggle', () => {
  const { result } = renderHook(() => useIsOpen([1, 2, 3]))

  act(() => {
    result.current.toggle(5)
  })

  expect(result.current.value).toEqual([1, 2, 3, 5])

  act(() => {
    result.current.toggle(2)
  })

  expect(result.current.value).toEqual([1, 3, 5])
})

test('should test', () => {
  const { result } = renderHook(() => useIsOpen([1, 2, 3]))

  act(() => {
    result.current.set(5)
  })

  expect(result.current.value).toEqual([5])

  act(() => {
    result.current.set(5)
  })

  expect(result.current.value).toEqual([])
})
