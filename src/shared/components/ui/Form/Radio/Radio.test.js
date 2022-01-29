import React from 'react'
import Radio from '@components/ui/Form/Radio'
import { render, screen } from '@jestutils'
import '@testing-library/jest-dom'

const props = {
  id: 'jestem-id',
  field: {
    name: 'field-name',
    value: 'some-value',
    onChange: jest.fn()
  },
  form: {
    errors: {},
    touched: {}
  }
}

describe('<Radio /> mount', () => {
  it('is mounted', () => {
    render(<Radio {...props} />)
  })

  it('has default prop `className` with input__radio', () => {
    render(<Radio {...props} />)

    const radio = screen.getByRole('radio')

    expect(radio).toHaveClass('input__radio')
  })

  it('has label rendered if it is given`', () => {
    render(<Radio {...props} label='label' />)

    const label = screen.getByText('label')
    expect(label).toBeInTheDocument()
  })
})
