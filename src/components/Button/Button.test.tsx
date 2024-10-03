import '@testing-library/jest-dom'

import { Button } from '@components/Button'
import { fireEvent, render } from '@testing-library/react'

import { ButtonProps } from './Button'

describe('<Button /> mount', () => {
  it('should render <Button />', async () => {
    const props: ButtonProps = {
      children: <p>Button</p>,
      variant: 'primary',
      'data-testid': 'button'
    }

    const { getByTestId } = render(<Button {...props} />)

    const button = getByTestId('button')

    fireEvent.click(button)

    expect(button).toHaveClass('button button--primary button--medium')
  })

  it('should render <Button /> as disabled & loading', () => {
    const props: ButtonProps = {
      children: <p>Button</p>,
      variant: 'primary',
      isLoading: true,
      isDisabled: true,
      'data-testid': 'button'
    }

    const { getByTestId } = render(<Button {...props} />)

    const button = getByTestId('button')

    const innerDiv = button.querySelector('div > div')

    expect(innerDiv).toHaveClass('spinner')
  })
})

describe('<Button /> mount as link', () => {
  it('should render <Button /> as link', () => {
    const props: ButtonProps = {
      tag: 'a',
      title: undefined,
      href: undefined,
      target: undefined,
      children: <p>Link</p>,
      'data-testid': 'link'
    }

    const { getByTestId } = render(<Button {...props} />)

    const button = getByTestId('link')

    expect(button).toHaveClass('link')
  })

  it('should render <Button /> as link with button style', () => {
    const props: ButtonProps = {
      tag: 'a',
      title: undefined,
      href: undefined,
      target: undefined,
      children: <p>Link</p>,
      buttonStyle: true,
      'data-testid': 'link'
    }

    const { getByTestId } = render(<Button {...props} />)

    const button = getByTestId('link')

    expect(button).toHaveClass('button button--primary button--medium')
  })
})
