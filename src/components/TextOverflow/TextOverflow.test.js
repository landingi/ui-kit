import React from 'react'
import { render, screen } from '@jestutils'
import '@testing-library/jest-dom'
import TextOverflow from '@components/TextOverflow'

describe('<TextOverflow/> mount', () => {
  it('is mounted', () => {
    render(<TextOverflow />)
  })

  it('has `overflow` class', () => {
    render(<TextOverflow />)

    const overflow = screen.getByTestId('overflow')

    expect(overflow).toHaveClass('overflow')
  })
})
