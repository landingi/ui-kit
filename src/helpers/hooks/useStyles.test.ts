import { useStyles } from '@helpers/hooks/useStyles'
import { renderHook } from '@testing-library/react-hooks'

const mocksStyles = {
  test: 'Test-module__test',
  'test--one': 'Test-module__test--one',
  'test--two': 'Test-module__test--two'
}

const mockCustomClasses = ['Custom-class--first', 'Custom-class--second']

describe('should use useStyles', () => {
  it('return classname for single truthy case', () => {
    const { result } = renderHook(() =>
      useStyles({
        [mocksStyles.test]: true
      })
    )
    expect(result.current).toEqual('Test-module__test')
  })
  it('return proper classname for single truthy and falsy case', () => {
    const { result } = renderHook(() =>
      useStyles({
        [mocksStyles.test]: false,
        [mocksStyles['test--one']]: true
      })
    )
    expect(result.current).toEqual('Test-module__test--one')
  })
  it('return proper classname for two truthy cases', () => {
    const { result } = renderHook(() =>
      useStyles({
        [mocksStyles.test]: true,
        [mocksStyles['test--one']]: true
      })
    )
    expect(result.current).toEqual('Test-module__test Test-module__test--one')
  })
  it('return proper classname for two falsy cases', () => {
    const { result } = renderHook(() =>
      useStyles({
        [mocksStyles.test]: false,
        [mocksStyles['test--one']]: false
      })
    )
    expect(result.current).toEqual('')
  })
  it('return proper classname for changed state', () => {
    let truthyCase = true
    let falsyCase = false

    const { result, rerender } = renderHook(() =>
      useStyles({
        [mocksStyles.test]: truthyCase,
        [mocksStyles['test--one']]: falsyCase
      })
    )

    expect(result.current).toEqual('Test-module__test')

    truthyCase = false
    falsyCase = true

    rerender()

    expect(result.current).toEqual('Test-module__test--one')
  })

  it('return proper classname if custom classes were applied', () => {
    const { result } = renderHook(() =>
      useStyles(
        {
          [mocksStyles.test]: true,
          [mocksStyles['test--one']]: false
        },
        mockCustomClasses
      )
    )

    const allIncludedClasses = [...mockCustomClasses, mocksStyles.test]

    const notIncludedClass = mocksStyles['test--one']

    allIncludedClasses.map(className => {
      expect(result.current).toContain(className)
    })

    expect(result.current).not.toContain(notIncludedClass)
  })
})
