import '@testing-library/jest-dom'

import ShowPassword from '@components/ShowPassword'
import { fireEvent,render } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'

describe('<ShowPassword/> tests', () => {
  it('renders properly with no label', () => {
    render(<ShowPassword />)
  })

  it('renders properly with label', () => {
    const { container } = render(
      <ShowPassword hasLabel i18n={{ show: 'show', hide: 'hide' }} />
    )

    expect(container.innerHTML).toMatch(/show/i)
  })

  it('change icon and label on click', () => {
    const { container, getByTestId } = render(
      <ShowPassword hasLabel i18n={{ show: 'show', hide: 'hide' }} />
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
