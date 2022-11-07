import '@testing-library/jest-dom'

import TextOverflow from '@components/TextOverflow'
import { render, screen } from '@testing-library/react'
import React from 'react'

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
