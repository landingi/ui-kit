import '@testing-library/jest-dom'

import { ShowPassword } from '@components/ShowPassword'
import { act, fireEvent, render } from '@testing-library/react'

const i18n = {
  show: 'show',
  hide: 'hide'
}

describe('<ShowPassword/> tests', () => {
  it('renders properly with no label', () => {
    render(<ShowPassword i18n={i18n} />)
  })

  it('renders properly with label', () => {
    const { container } = render(<ShowPassword hasLabel i18n={i18n} />)

    expect(container.innerHTML).toMatch(/show/i)
  })

  it('change icon and label on click', () => {
    const { container, getByTestId } = render(
      <ShowPassword hasLabel i18n={i18n} />
    )

    const button = getByTestId('show-pasword')

    act(() => {
      fireEvent.click(button)
    })

    expect(container.innerHTML).toMatch(/hide/i)

    fireEvent.click(button)

    expect(container.innerHTML).toMatch(/show/i)
  })
})
