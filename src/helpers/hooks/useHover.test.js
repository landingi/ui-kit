import { render, fireEvent } from '@jestutils'
import { useHover } from '@hooks/useHover'
import { renderHook } from '@testing-library/react-hooks'

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

    fireEvent.mouseOver(div)

    fireEvent.mouseLeave(div)
  })
})
