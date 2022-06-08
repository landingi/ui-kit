import React from 'react'
import Spacer from '@components/Spacer'
import { render, screen } from '@jestutils'
import '@testing-library/jest-dom'

describe('<Spacer/> mount', () => {
  it('is mounted', () => {
    render(<Spacer />)
  })

  it('has `spacer` class', () => {
    render(<Spacer />)

    const spacer = screen.getByTestId('spacer')

    expect(spacer).toHaveClass('spacer')
  })

  it('has `spacer--mini` class when space prop equals mini', () => {
    render(<Spacer space='mini' />)

    const spacer = screen.getByTestId('spacer')

    expect(spacer).toHaveClass('spacer--mini')
  })

  it('has `spacer--tiny` class when space prop equals tiny', () => {
    render(<Spacer space='tiny' />)

    const spacer = screen.getByTestId('spacer')

    expect(spacer).toHaveClass('spacer--tiny')
  })

  it('has `spacer--small` class when space prop equals small', () => {
    render(<Spacer space='small' />)

    const spacer = screen.getByTestId('spacer')

    expect(spacer).toHaveClass('spacer--small')
  })

  it('has `spacer--medium` class when space prop equals medium', () => {
    render(<Spacer space='medium' />)

    const spacer = screen.getByTestId('spacer')

    expect(spacer).toHaveClass('spacer--medium')
  })

  it('has `spacer--large` class when space prop equals large', () => {
    render(<Spacer space='large' />)

    const spacer = screen.getByTestId('spacer')

    expect(spacer).toHaveClass('spacer--large')
  })

  it('has `spacer--x-large` class when space prop equals x-large', () => {
    render(<Spacer space='x-large' />)

    const spacer = screen.getByTestId('spacer')

    expect(spacer).toHaveClass('spacer--x-large')
  })

  it('has `spacer--huge` class when space prop equals huge', () => {
    render(<Spacer space='huge' />)

    const spacer = screen.getByTestId('spacer')

    expect(spacer).toHaveClass('spacer--huge')
  })
})
