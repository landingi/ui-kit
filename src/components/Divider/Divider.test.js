import React from 'react'
import { render, screen } from '@jestutils'
import '@testing-library/jest-dom'
import Divider from '@components/Divider'

describe('<Divider/> mount', () => {
  it('is mounted', () => {
    render(<Divider />)
  })

  it('has `divider` class', () => {
    render(<Divider />)

    const divider = screen.getByTestId('divider')

    expect(divider).toHaveClass('divider')
  })

  it('has normal variant', () => {
    render(<Divider />)

    const divider = screen.getByTestId('divider')

    expect(divider).toHaveClass('divider--normal')
  })

  it('has dropdown variant', () => {
    render(<Divider variant='dropdown' />)

    const divider = screen.getByTestId('divider')

    expect(divider).toHaveClass('divider--dropdown')
  })

  it('has horizontal variant', () => {
    render(<Divider variant='horizontal' />)

    const divider = screen.getByTestId('divider')

    expect(divider).toHaveClass('divider--horizontal')
  })

  it('has menu variant', () => {
    render(<Divider variant='menu' />)

    const divider = screen.getByTestId('divider')

    expect(divider).toHaveClass('divider--menu')
  })

  it('has vertical align', () => {
    render(<Divider align='vertical' />)

    const divider = screen.getByTestId('divider')

    expect(divider).toHaveClass('divider--normal')
  })
})
