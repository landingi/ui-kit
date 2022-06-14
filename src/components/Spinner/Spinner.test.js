import React from 'react'
import { render, screen } from '@jestutils'
import '@testing-library/jest-dom'
import Spinner from '@components/ui/Spinner'

describe('<Spinner/> mount', () => {
  it('is mounted', () => {
    render(<Spinner />)
  })

  it('has `spinner` class', () => {
    render(<Spinner />)

    const spinner = screen.getByTestId('spinner')

    expect(spinner).toHaveClass('spinner')
  })
})
