import { useHover } from '@helpers/hooks/useHover'
import { fireEvent, render } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react-hooks'

describe('useHover tests', () => {
  it('set isHover on true when mouse over', async () => {
    const {
      result: {
        current: [props, isHover]
      }
    } = renderHook(() => useHover())

    const { getByTestId } = render(
      <div {...props} data-testid='div-hover'>
        test
      </div>
    )

    const div = await getByTestId('div-hover')

    expect(isHover).toBe(false)

    act(() => {
      fireEvent.mouseOver(div)
    })

    act(() => {
      fireEvent.mouseLeave(div)
    })
  })
})
