import LimitQuantity from '@components/LimitQuantity'
import { render, screen } from '@testing-library/react'
import React from 'react'

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
