import React from 'react'
import { render, screen } from '@jestutils'
import '@testing-library/jest-dom'
import Check from '@components/Check'

describe('<Check/> mount', () => {
  it('is mounted', () => {
    render(<Check>Landingi</Check>)
  })

  it('has `check` class', () => {
    render(<Check>Landingi</Check>)

    const check = screen.getByTestId('check')

    expect(check).toHaveClass('check')
  })

  it('has not `check--positive` class', () => {
    render(<Check>Landingi</Check>)

    const check = screen.getByTestId('check')

    expect(check).not.toHaveClass('check--positive')
  })

  it('has `check--positive` class', async () => {
    render(<Check positive>Landingi</Check>)

    const check = screen.getByTestId('check')

    expect(check).toHaveClass('check--positive')
  })
})
