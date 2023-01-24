import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { MaskedInputForm } from './MaskedInputForm'

const props = {
  field: {
    name: 'input',
    value: 'value',
    onChange: jest.fn(),
    onBlur: jest.fn()
  },
  mask: false as const
}

describe('<MaskedInput/> tests', () => {
  it('renders properly', () => {
    render(<MaskedInputForm {...props} />)

    const component = screen.getByTestId('form-masked-input-wrapper')

    expect(component).not.toHaveClass('form--has-error')
  })

  it('shows error properly', () => {
    const propsWithError = {
      ...props,
      form: {
        errors: {
          input: 'err'
        },
        touched: {
          input: true
        }
      }
    }

    render(<MaskedInputForm {...propsWithError} />)

    const component = screen.getByTestId('form-masked-input-wrapper')

    expect(component).toHaveClass('form--has-error')
  })
})
