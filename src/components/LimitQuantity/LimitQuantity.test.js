import React from 'react'
import { render, screen } from '@testing-library/react'
import LimitQuantity from '@components/LimitQuantity'

describe('<LimitQuantity /> mount', () => {
  const props = {
    limit: 200,
    quantity: 100
  }

  it('is mounted', () => {
    render(<LimitQuantity {...props} />)
  })
})

describe('<LimitQuantity /> mount', () => {
  const props = {
    limit: -1,
    quantity: 100
  }

  it('is mounted', () => {
    render(<LimitQuantity {...props} />)

    const text = screen.getByText('/ ∞')
    expect(text).toBeInDocument
  })
})
