import React from 'react'
import ProgressBar from '@components/ProgressBar'
import { render, screen } from '@jestutils'
import '@testing-library/jest-dom'

const props = {
  quantity: 60,
  limit: 100,
  variant: 'success'
}

describe('<ProgressBar /> mount', () => {
  it('is mounted', () => {
    render(<ProgressBar {...props} />)
  })

  it('has medium size', () => {
    render(<ProgressBar {...props} />)

    const background = screen.getByTestId('background')

    expect(background).toHaveClass('bar__medium')

    const fulfillment = screen.getByTestId('fulfillment')

    expect(fulfillment).toHaveClass('bar__medium')
  })

  it('has small size', () => {
    render(<ProgressBar {...props} size='small' />)

    const background = screen.getByTestId('background')

    expect(background).toHaveClass('bar__small')

    const fulfillment = screen.getByTestId('fulfillment')

    expect(fulfillment).toHaveClass('bar__small')
  })

  it('has success variant', () => {
    render(<ProgressBar {...props} />)

    const background = screen.getByTestId('background')

    expect(background).toHaveClass('bar--success')

    const fulfillment = screen.getByTestId('fulfillment')

    expect(fulfillment).toHaveClass('bar--success')
  })

  it('has warning variant', () => {
    render(<ProgressBar {...props} variant='warning' />)

    const background = screen.getByTestId('background')

    expect(background).toHaveClass('bar--warning')

    const fulfillment = screen.getByTestId('fulfillment')

    expect(fulfillment).toHaveClass('bar--warning')
  })

  it('has alert variant', () => {
    render(<ProgressBar {...props} variant='alert' />)

    const background = screen.getByTestId('background')

    expect(background).toHaveClass('bar--alert')

    const fulfillment = screen.getByTestId('fulfillment')

    expect(fulfillment).toHaveClass('bar--alert')
  })

  it('has progress variant', () => {
    render(<ProgressBar {...props} variant='progress' />)

    const background = screen.getByTestId('background')

    expect(background).toHaveClass('bar--progress')

    const fulfillment = screen.getByTestId('fulfillment')

    expect(fulfillment).toHaveClass('bar--progress')
  })

  it('has brand variant', () => {
    render(<ProgressBar {...props} variant='brand' />)

    const background = screen.getByTestId('background')

    expect(background).toHaveClass('bar--brand')

    const fulfillment = screen.getByTestId('fulfillment')

    expect(fulfillment).toHaveClass('bar--brand')
  })

  it('has no value show if showValue prop is false', () => {
    render(<ProgressBar {...props} />)

    const value = screen.queryByTestId('color-number')

    expect(value).not.toBeInTheDocument()
  })

  it('has value shown if showValue prop is true', () => {
    render(<ProgressBar {...props} showValue />)

    const value = screen.queryByTestId('color-number')

    expect(value).toBeInTheDocument()
  })

  it('has no limit alert if i18n prop has no translation', () => {
    render(<ProgressBar {...props} quantity={100} />)

    const limitAlert = screen.queryByTestId('limit-alert')

    expect(limitAlert).not.toBeInTheDocument()
  })

  it('has limit alert if i18n prop has translation', () => {
    render(
      <ProgressBar
        {...props}
        quantity={150}
        i18n={{ limitAlert: 'Limit exceeded' }}
      />
    )

    const limitAlert = screen.queryByTestId('limit-alert')

    expect(limitAlert).toBeInTheDocument()
  })

  it('has no bar animation if withoutAnimation prop is false', () => {
    render(<ProgressBar {...props} />)

    const fulfillment = screen.getByTestId('fulfillment')

    expect(fulfillment).not.toHaveClass('bar__fulfillment--no-animation')
  })

  it('has bar animation if withoutAnimation prop is true', () => {
    render(<ProgressBar {...props} withoutAnimation />)

    const fulfillment = screen.getByTestId('fulfillment')

    expect(fulfillment).toHaveClass('bar__fulfillment--no-animation')
  })
})
