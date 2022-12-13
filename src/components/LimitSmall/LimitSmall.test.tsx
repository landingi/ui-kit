import { LimitSmall } from '@components/LimitSmall'
import { render, screen } from '@testing-library/react'

describe('<LimitSmall /> mount', () => {
  it('is mounted', () => {
    render(
      <LimitSmall
        limit={20000}
        limitText='word.unique.visitors'
        padding='none'
        quantity={5}
      />
    )
  })
})

describe('<LimitSmall /> mount', () => {
  it('is mounted', () => {
    render(
      <LimitSmall
        limit={-1}
        limitText='word.unique.visitors'
        padding='none'
        quantity={5}
      />
    )

    const text = screen.getByText('/ ∞')
    expect(text).toBeInDocument()
  })
})
