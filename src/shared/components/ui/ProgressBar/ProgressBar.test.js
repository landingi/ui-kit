import React from 'react'
import ProgressBar from '@components/ui/ProgressBar'
import { render, screen } from '@jestutils'
import '@testing-library/jest-dom'

const progressBarComponent = <ProgressBar quantity={58} variant='success' />

describe('<ProgressBar /> mount', () => {
  it('is mounted', () => {
    render(<ProgressBar quantity={58} variant='success' />)
  })

  it('has success variant', () => {
    render(<ProgressBar quantity={58} variant='success' />)

    const background = screen.getByTestId('background')

    expect(background).toHaveClass('bar--success')

    const fulfillment = screen.getByTestId('fulfillment')

    expect(fulfillment).toHaveClass('bar--success')
  })

  it('has success variant', () => {
    render(<ProgressBar quantity={58} variant='warning' />)

    const background = screen.getByTestId('background')

    expect(background).toHaveClass('bar--warning')

    const fulfillment = screen.getByTestId('fulfillment')

    expect(fulfillment).toHaveClass('bar--warning')
  })

  it('has alert variant', () => {
    render(<ProgressBar quantity={58} variant='alert' />)

    const background = screen.getByTestId('background')

    expect(background).toHaveClass('bar--alert')

    const fulfillment = screen.getByTestId('fulfillment')

    expect(fulfillment).toHaveClass('bar--alert')
  })
})
