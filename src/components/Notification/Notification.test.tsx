import '@testing-library/jest-dom'

import { Notification } from '@components/Notification'
import { render, screen } from '@testing-library/react'

describe('<Notification/> mount', () => {
  it('is mounted', () => {
    render(<Notification>Notification content</Notification>)

    screen.getByText('Notification content')

    const notificationComponent = screen.getByTestId('notification')

    expect(notificationComponent).toHaveClass('notification')
  })

  it('has info variant by default', () => {
    render(<Notification>Notification content</Notification>)

    const notificationComponent = screen.getByTestId('notification')
    const icon = screen.getByTestId('notification-icon')

    expect(icon).toHaveClass('icon-info')
    expect(notificationComponent).toHaveClass('notification--info')
  })

  it('has success variant', () => {
    render(<Notification type='success'>Notification content</Notification>)

    const notificationComponent = screen.getByTestId('notification')
    const icon = screen.getByTestId('notification-icon')

    expect(icon).toHaveClass('icon-ok')
    expect(notificationComponent).toHaveClass('notification--success')
  })

  it('has warning variant', () => {
    render(<Notification type='warning'>Notification content</Notification>)

    const notificationComponent = screen.getByTestId('notification')
    const icon = screen.getByTestId('notification-icon')

    expect(icon).toHaveClass('icon-exclamation')
    expect(notificationComponent).toHaveClass('notification--warning')
  })

  it('has alert variant', () => {
    render(<Notification type='alert'>Notification content</Notification>)

    const notificationComponent = screen.getByTestId('notification')
    const icon = screen.getByTestId('notification-icon')

    expect(icon).toHaveClass('icon-remove')
    expect(notificationComponent).toHaveClass('notification--alert')
  })

  it('has working close button', () => {
    const handleOnClick = jest.fn()

    render(
      <Notification isClosable onClick={handleOnClick}>
        Notification content
      </Notification>
    )

    const closeButton = screen.getByTestId('close-component-button')

    closeButton.click()

    expect(handleOnClick).toHaveBeenCalled()
  })

  it('has time', () => {
    render(<Notification hasTime>Notification content</Notification>)

    screen.getByTestId('notification-time')
  })
})
