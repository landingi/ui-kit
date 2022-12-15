import '@testing-library/jest-dom'

import { Alert } from '@components/Alert'
import { render, screen } from '@testing-library/react'

const props = {
  children: 'Alert content'
}

describe('<Alert /> mount', () => {
  it('is mounted', () => {
    render(<Alert {...props} />)

    screen.getByText('Alert content')
  })

  it('has `alert-message` class', () => {
    render(<Alert {...props} />)

    const alertComponent = screen.getByTestId('alert')

    expect(alertComponent).toHaveClass('alert-message')
  })

  it('is alert type', () => {
    render(<Alert {...props} type='alert' />)

    const alertComponent = screen.getByTestId('alert')
    const icon = screen.getByTestId('alert-icon')

    expect(icon).toHaveClass('icon-exclamation-triangle')
    expect(alertComponent).toHaveClass('alert-message--alert')
  })

  it('is info type', () => {
    render(<Alert {...props} type='info' />)

    const alertComponent = screen.getByTestId('alert')
    const icon = screen.getByTestId('alert-icon')

    expect(icon).toHaveClass('icon-info')
    expect(alertComponent).toHaveClass('alert-message--info')
  })

  it('is warning type', () => {
    render(<Alert {...props} type='warning' />)

    const alertComponent = screen.getByTestId('alert')
    const icon = screen.getByTestId('alert-icon')

    expect(icon).toHaveClass('icon-exclamation')
    expect(alertComponent).toHaveClass('alert-message--warning')
  })

  it('is success type', () => {
    render(<Alert {...props} type='success' />)

    const alertComponent = screen.getByTestId('alert')
    const icon = screen.getByTestId('alert-icon')

    expect(icon).toHaveClass('icon-ok')
    expect(alertComponent).toHaveClass('alert-message--success')
  })
})
