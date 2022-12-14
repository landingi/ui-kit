import '@testing-library/jest-dom'

import { LimitSmall } from '@components/LimitSmall'
import { render, screen } from '@testing-library/react'

describe('<LimitSmall /> mount', () => {
  it('should be limit 200', () => {
    render(
      <LimitSmall
        limit={20000}
        limitText='word.unique.visitors'
        padding='none'
        quantity={5}
      />
    )

    const text = screen.getByText('/ 20 000')

    expect(text).toBeInTheDocument()
  })

  it('should be no limit', () => {
    render(
      <LimitSmall
        limit={-1}
        limitText='word.unique.visitors'
        padding='none'
        quantity={5}
      />
    )

    const text = screen.getByText('/ ∞')

    expect(text).toBeInTheDocument()
  })
})
