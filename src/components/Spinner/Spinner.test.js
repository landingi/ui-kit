import '@testing-library/jest-dom'

import Spinner from '@components/Spinner'
import { render, screen } from '@testing-library/react'
import React from 'react'

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
