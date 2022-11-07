import '@testing-library/jest-dom'
import React from 'react'
import { render } from '@testing-library/react'
import Checkbox from '@components/Checkbox'

const props = {
  onChange: jest.fn(),
  checked: false
}

describe('<Checkbox /> tests', () => {
  it('renders properly', async () => {
    const { getByTestId } = render(
      <Checkbox {...props} data-testid='checkbox' />
    )
    const checkbox = await getByTestId('checkbox')

    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
  })
})
