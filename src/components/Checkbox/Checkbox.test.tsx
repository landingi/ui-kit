import '@testing-library/jest-dom'

import { Checkbox } from '@components/Checkbox'
import { render } from '@testing-library/react'

describe('<Checkbox /> tests', () => {
  it('renders properly', () => {
    const { getByTestId } = render(
      <Checkbox onChange={jest.fn()} checked={false} />
    )

    const checkbox = getByTestId('checkbox')

    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
  })
})
