import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import MaskedInput from '@components/Input/MaskedInput'

describe('<MaskedInput /> tests', () => {
  it('renders properly with default props', () => {
    render(<MaskedInput />)
  })

  it('renders properly with label', () => {
    const { getByText } = render(<MaskedInput i18n={{ label: 'test-label' }} />)

    getByText('test-label')
  })

  it('call default callbacks', () => {
    const { getByTestId } = render(<MaskedInput />)

    const input = getByTestId('masked-input')

    fireEvent.change(input, { target: { value: 'test' } })
    fireEvent.blur(input)
    fireEvent.keyDown(input)
  })

  it('renders properly with disabled props', () => {
    render(<MaskedInput disabled />)
  })
})
