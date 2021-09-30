import { renderHook } from '@testing-library/react-hooks'
import { usePermissions } from '@helpers/hooks/usePermissions'

test('should use usePermissions and return true', () => {
  const { result } = renderHook(() =>
    usePermissions(['a', 'b', 'c'], 'b')
  )
  expect(result.current).toEqual(true)
})

test('should use usePermissions and return false', () => {
  const { result } = renderHook(() =>
    usePermissions(['a', 'b', 'c'], 'd')
  )
  expect(result.current).toEqual(false)
})
