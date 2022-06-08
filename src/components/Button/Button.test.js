import React from 'react'
import Button from '@components/ui/Button'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('<Button /> mount', () => {
  it('should render <Button />', async () => {
    const props = {
      children: <p>Button</p>,
      variant: 'primary',
      ['data-testid']: 'button'
    }

    const { getByTestId } = render(<Button {...props} />)

    const button = getByTestId('button')

    fireEvent.click(button)

    expect(button).toHaveClass('button button--primary button--medium')
  })
})

it('should render <Button /> as disabled & loading', () => {
  const props = {
    children: <p>Button</p>,
    variant: 'primary',
    isLoading: true,
    isDisabled: true,
    ['data-testid']: 'button'
  }

  const { getByTestId } = render(<Button {...props} />)

  const button = getByTestId('button').querySelector('div')

  expect(button).toHaveClass('spinner')
})

describe('<Button /> mount as link', () => {
  it('should render <Button /> as link', () => {
    const props = {
      tag: 'a',
      title: undefined,
      href: undefined,
      target: undefined,
      children: <p>Link</p>,
      ['data-testid']: 'link'
    }

    const { getByTestId } = render(<Button {...props} />)

    const button = getByTestId('link')

    expect(button).toHaveClass('link')
  })

  it('should render <Button /> as link with button style', () => {
    const props = {
      tag: 'a',
      title: undefined,
      href: undefined,
      target: undefined,
      children: <p>Link</p>,
      buttonStyle: true,
      ['data-testid']: 'link'
    }

    const { getByTestId } = render(<Button {...props} />)

    const button = getByTestId('link')

    expect(button).toHaveClass('button button--primary button--medium')
  })
})
