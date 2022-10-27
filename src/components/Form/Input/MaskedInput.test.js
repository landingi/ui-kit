import React from 'react'
import MaskedInput from './MaskedInput'
import { render, screen } from '@jestutils'
import '@testing-library/jest-dom'

const props = {
  field: {
    name: 'input',
    value: 'value'
  },
  form: {
    errors: {},
    touched: {}
  }
}

describe('<MaskedInput/> mount', () => {
  it('is mounted', () => {
    render(<MaskedInput {...props} />)

    const component = screen.getByTestId('form-masked-input-wrapper')

    expect(component).not.toHaveClass('form--has-error')
  })

  it('is mounted', () => {
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

    render(<MaskedInput {...propsWithError} />)

    const component = screen.getByTestId('form-masked-input-wrapper')

    expect(component).toHaveClass('form--has-error')
  })
})
