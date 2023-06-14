import '@testing-library/jest-dom'

import { Radio } from '@components/Form/Radio'
import { render, screen } from '@testing-library/react'

const props = {
  id: 'jestem-id',
  field: {
    name: 'field-name',
    value: 'some-value',
    onChange: jest.fn(),
    onBlur: jest.fn()
  },
  form: {
    errors: {},
    touched: {}
  },
  i18n: {
    label: 'label'
  }
}

describe('<Radio /> mount', () => {
  it('is mounted', () => {
    render(<Radio {...props} />)
  })

  it('has default prop `className` with input', () => {
    render(<Radio {...props} />)

    const radio = screen.getByRole('radio')

    expect(radio).toHaveClass('radio')
  })
})
