import React from 'react'
import ProgressBar from '@components/ui/ProgressBar'
import { render, screen } from '@jestutils'
import '@testing-library/jest-dom'

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

  it('has no ColorNumber shown if showColorNumber prop is false', () => {
    render(<ProgressBar quantity={58} variant='alert' />)

    const colorNumber = screen.queryByTestId('color-number')

    expect(colorNumber).not.toBeInTheDocument()
  })

  it('has ColorNumber shown if showColorNumber prop is true', () => {
    render(<ProgressBar quantity={58} variant='alert' showColorNumber />)

    const colorNumber = screen.queryByTestId('color-number')

    expect(colorNumber).toBeInTheDocument()
  })
})
