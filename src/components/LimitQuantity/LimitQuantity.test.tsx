import '@testing-library/jest-dom'

import { LimitQuantity } from '@components/LimitQuantity'
import { render, screen } from '@testing-library/react'

describe('<LimitQuantity /> mount', () => {
  it('should be limit 200', () => {
    render(<LimitQuantity limit={200} quantity={100} />)

    const text = screen.getByText('/ 200')

    expect(text).toBeInTheDocument()
  })

  it('should be no limit', () => {
    render(<LimitQuantity limit={-1} quantity={100} />)

    const text = screen.getByText('/ ∞')

    expect(text).toBeInTheDocument()
  })
})
