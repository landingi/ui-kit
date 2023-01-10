import { render, screen } from '@testing-library/react'

import Input from './Input'

describe('Input tests', () => {
  const props = {
    field: {
      name: 'input-name',
      value: '',
      onChange: jest.fn(),
      onBlur: jest.fn()
    },
    form: {
      errors: {},
      touched: {}
    },
    id: 'input-id'
  }
  it('properly renders', () => {
    render(<Input {...props} />)
  })
  it('properly renders error label when is touched', () => {
    const isTouchedProps = {
      field: {
        name: 'input-name',
        value: '',
        onChange: jest.fn(),
        onBlur: jest.fn()
      },
      form: {
        errors: { 'input-name': 'error-name' },
        touched: { 'input-name': true }
      },
      id: 'input-id'
    }
    render(<Input {...isTouchedProps} />)
    expect(screen.findByText('error-name')).toBeTruthy()
  })
})
