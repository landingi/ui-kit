import React from 'react'
import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import Textarea from '@components/Textarea'
import '@testing-library/jest-dom'

const initialProps = {
  id: 'mocked-textarea',
  name: 'mocked-textarea',
  value: 'initial value',
  onChange: jest.fn(),
  onBlur: jest.fn(),
  i18n: {
    label: 'textarea label',
    placeholder: 'textarea placeholder'
  },
  errors: {},
  touched: {}
}

const isTouchedProps = {
  errors: { 'mocked-textarea': 'error-name' },
  touched: { 'mocked-textarea': true }
}

describe('<Textarea/> mount', () => {
  it('is mounted', () => {
    const { getByRole } = render(<Textarea {...initialProps} />)

    const textAreaNode = getByRole('textbox')

    expect(textAreaNode).toBeVisible()
  })

  it('has value passed as prop', () => {
    const { getByRole } = render(<Textarea {...initialProps} />)

    const { value } = initialProps

    const textAreaNode = getByRole('textbox')

    expect(textAreaNode).toHaveValue(value)
  })

  it('has placeholder passed as prop', () => {
    const { getByRole } = render(<Textarea {...initialProps} />)

    const {
      i18n: { placeholder }
    } = initialProps

    const textAreaNode = getByRole('textbox')

    expect(textAreaNode).toHaveAttribute('placeholder', placeholder)
  })

  it('should call onChange handler', () => {
    const { getByRole } = render(<Textarea {...initialProps} />)

    const { onChange } = initialProps

    const textAreaNode = getByRole('textbox')

    fireEvent.change(textAreaNode, { target: { value: 'new value' } })

    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('properly renders error label when is touched', () => {
    const { getByText } = render(
      <Textarea {...initialProps} {...isTouchedProps} />
    )

    expect(getByText('error-name')).toBeTruthy()
  })
})
