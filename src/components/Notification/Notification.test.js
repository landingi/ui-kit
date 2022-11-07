import React from 'react'
import Notification from '@components/Notification'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

const props = {
  children: 'Notification content'
}

describe('<Notification/> mount', () => {
  it('is mounted', () => {
    render(<Notification {...props} />)

    screen.getByText('Notification content')

    const notificationComponent = screen.getByTestId('notification')

    expect(notificationComponent).toHaveClass('notification')
  })

  it('has info variant by default', () => {
    render(<Notification {...props} />)

    const notificationComponent = screen.getByTestId('notification')
    const icon = screen.getByTestId('notification-icon')

    expect(icon).toHaveClass('icon-info')
    expect(notificationComponent).toHaveClass('notification--info')
  })

  it('has success variant', () => {
    render(<Notification {...props} type='success' />)

    const notificationComponent = screen.getByTestId('notification')
    const icon = screen.getByTestId('notification-icon')

    expect(icon).toHaveClass('icon-ok')
    expect(notificationComponent).toHaveClass('notification--success')
  })

  it('has warning variant', () => {
    render(<Notification {...props} type='warning' />)

    const notificationComponent = screen.getByTestId('notification')
    const icon = screen.getByTestId('notification-icon')

    expect(icon).toHaveClass('icon-exclamation')
    expect(notificationComponent).toHaveClass('notification--warning')
  })

  it('has alert variant', () => {
    render(<Notification {...props} type='alert' />)

    const notificationComponent = screen.getByTestId('notification')
    const icon = screen.getByTestId('notification-icon')

    expect(icon).toHaveClass('icon-remove')
    expect(notificationComponent).toHaveClass('notification--alert')
  })

  it('has working close button', () => {
    const handleOnClick = jest.fn()

    render(<Notification {...props} isClosable onClick={handleOnClick} />)

    const closeButton = screen.getByTestId('close-component-button')

    closeButton.click()

    expect(handleOnClick).toHaveBeenCalled()
  })

  it('has time', () => {
    render(<Notification {...props} hasTime />)

    screen.getByTestId('notification-time')
  })
})
