import React from 'react'
import StatsBadge from '@components/StatsBadge'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('<StatsBadge /> mount', () => {
  it('is mounted', () => {
    render(<StatsBadge description='word.statistics' />)
  })

  it('has green color by default', () => {
    render(<StatsBadge description='word.statistics' />)

    const badge = screen.getByTestId('badge')

    expect(badge).toHaveClass('container--green')
  })

  it('has yellow color when color prop equals yellow', () => {
    render(<StatsBadge description='word.statistics' color='yellow' />)

    const badge = screen.getByTestId('badge')

    expect(badge).toHaveClass('container--yellow')
  })

  it('has pink color when color prop equals pink', () => {
    render(<StatsBadge description='word.statistics' color='pink' />)

    const badge = screen.getByTestId('badge')

    expect(badge).toHaveClass('container--pink')
  })

  it('has quantity displayed when prop is set', () => {
    render(<StatsBadge description='word.statistics' quantity={50} />)

    const quantity = screen.getByText('50')

    expect(quantity).toBeInTheDocument()
  })

  it('has description displayed when prop is set', () => {
    render(<StatsBadge description='word.statistics' quantity={50} />)

    const description = screen.getByText('word.statistics')

    expect(description).toBeInTheDocument()
  })
})
