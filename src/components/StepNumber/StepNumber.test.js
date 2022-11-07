import '@testing-library/jest-dom'

import StepNumber from '@components/StepNumber'
import { render, screen } from '@testing-library/react'
import React from 'react'

const props = {
  step: 1,
  variant: 'completed',
  size: 'medium',
  absolute: true
}

describe('<StepNumber /> mount', () => {
  it('is mounted', () => {
    render(<StepNumber {...props} />)
  })

  it('wrapper text expect "1"', () => {
    const { getByText } = render(<StepNumber {...props} />)

    const content = getByText('1')

    expect(content).toHaveTextContent('1')
  })

  it('Expect "step__number--complete" class', () => {
    render(<StepNumber {...props} />)

    const stepNumber = screen.getByTestId('stepNumber')

    expect(stepNumber).toHaveClass('step__number--completed')
  })

  it('Expect "step__number--current" class', () => {
    render(<StepNumber {...props} variant='current' />)

    const stepNumber = screen.getByTestId('stepNumber')

    expect(stepNumber).toHaveClass('step__number--current')
  })

  it('Expect "step__number--next" class', () => {
    render(<StepNumber {...props} variant='next' />)

    const stepNumber = screen.getByTestId('stepNumber')

    expect(stepNumber).toHaveClass('step__number--next')
  })

  it('Expect "step__number--medium" class', () => {
    render(<StepNumber {...props} />)

    const stepNumber = screen.getByTestId('stepNumber')

    expect(stepNumber).toHaveClass('step__number--medium')
  })

  it('Expect "step__number--small" class', () => {
    render(<StepNumber {...props} size='small' />)

    const stepNumber = screen.getByTestId('stepNumber')

    expect(stepNumber).toHaveClass('step__number--small')
  })

  it('Expect "step__number--absolute" class', () => {
    render(<StepNumber {...props} />)

    const stepNumber = screen.getByTestId('stepNumber')

    expect(stepNumber).toHaveClass('step__number--absolute')
  })

  it('Expect "step__number--absolute" class', () => {
    render(<StepNumber {...props} absolute={false} />)

    const stepNumber = screen.getByTestId('stepNumber')

    expect(stepNumber).not.toHaveClass('step__number--absolute')
  })
})
