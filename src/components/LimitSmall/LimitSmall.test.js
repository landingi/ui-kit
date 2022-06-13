import React from 'react'
import { render, screen } from '@jestutils'
import LimitSmall from '@components/LimitSmall'

describe('<LimitSmall /> mount', () => {
  const props = {
    limit: 20000,
    limitText: 'word.unique.visitors',
    padding: 'none',
    quantity: 5
  }

  it('is mounted', () => {
    render(<LimitSmall {...props} />)
  })
})

describe('<LimitSmall /> mount', () => {
  const props = {
    limit: -1,
    limitText: 'word.unique.visitors',
    padding: 'none',
    quantity: 5
  }

  it('is mounted', () => {
    render(<LimitSmall {...props} />)

    const text = screen.getByText('/ ∞')
    expect(text).toBeInDocument
  })
})
