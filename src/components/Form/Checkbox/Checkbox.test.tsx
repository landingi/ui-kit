import { render, screen } from '@testing-library/react'

import { Checkbox } from './Checkbox'

describe('Checkbox tests', () => {
  const props = {
    field: {
      name: 'checkbox-test',
      value: false,
      onChange: jest.fn(),
      onBlur: jest.fn()
    },
    form: {
      errors: {},
      touched: {},
      setFieldValue: jest.fn()
    },
    id: 'checkbox-test'
  }
  it('properly render with props', () => {
    render(<Checkbox {...props} />)
  })

  it('properly render with label', () => {
    render(<Checkbox {...props} label='test label' />)

    expect(screen.findByRole('label')).toBeTruthy()
  })
  it('properly render error label when is touched', () => {
    const touchedProps = {
      field: {
        name: 'checkbox-test',
        value: false,
        onChange: jest.fn(),
        onBlur: jest.fn()
      },
      form: {
        errors: { 'checkbox-test': 'error-name' },
        touched: { 'checkbox-test': true },
        setFieldValue: jest.fn()
      },
      id: 'checkbox-test'
    }

    render(<Checkbox {...touchedProps} />)

    expect(screen.findByText('error-name')).toBeTruthy()
  })
})
