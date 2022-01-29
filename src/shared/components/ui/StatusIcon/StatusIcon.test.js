import React from 'react'
import StatusIcon from '@components/ui/StatusIcon'
import { render, screen } from '@jestutils'
import '@testing-library/jest-dom'

describe('<StatusIcon /> mount', () => {
  it('is mounted', () => {
    render(<StatusIcon />)
  })

  it('has `status-icon` class', () => {
    render(<StatusIcon />)

    const statusIcon = screen.getByTestId('status-icon')

    expect(statusIcon).toHaveClass('status-icon')
  })

  it('has `status-icon--active` class when variant is active', () => {
    render(<StatusIcon variant='active' />)

    const statusIcon = screen.getByTestId('status-icon')

    expect(statusIcon).not.toHaveClass('status-icon--inactive')
    expect(statusIcon).toHaveClass('status-icon--active')
  })

  it('has `status-icon--inactive` class when variant is inactive', () => {
    render(<StatusIcon variant='inactive' />)

    const statusIcon = screen.getByTestId('status-icon')

    expect(statusIcon).toHaveClass('status-icon--inactive')
    expect(statusIcon).not.toHaveClass('status-icon--active')
  })

  it('has `status-icon--tiny` class when size is tiny', () => {
    render(<StatusIcon size='tiny' />)

    const statusIcon = screen.getByTestId('status-icon')

    expect(statusIcon).toHaveClass('status-icon--tiny')
  })

  it('has `status-icon--medium` class by default', () => {
    render(<StatusIcon />)

    const statusIcon = screen.getByTestId('status-icon')

    expect(statusIcon).toHaveClass('status-icon--medium')
  })
})
