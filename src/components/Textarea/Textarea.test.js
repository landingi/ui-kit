import React from 'react'
import { render } from '@jestutils'
import { fireEvent } from '@testing-library/react'
import Textarea from '@components/Textarea'
import '@testing-library/jest-dom'

const initialProps = {
  value: 'initial value',
  onChange: jest.fn(),
  i18n: {
    placeholder: 'textarea placeholder'
  },
  id: 'mocked-textarea'
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
})
