import { useQueryString } from '@helpers/hooks/useQueryString'
import { act, renderHook } from '@testing-library/react-hooks'

test('should use useQueryString', () => {
  const { result } = renderHook(() => useQueryString('page', 1))

  expect(result.current[0]).toEqual(1)

  act(() => {
    result.current[1](5)
  })

  expect(result.current[0]).toEqual(5)
})
