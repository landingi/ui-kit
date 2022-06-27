import React from 'react'
import Spreader from '@components/Spreader'
import { render } from '@jestutils'
import '@testing-library/jest-dom'

const renderSpreader = (props = {}) => render(<Spreader {...props} />)

describe('<Spreader /> mount', () => {
  const spread = {
    mini: 'mini',
    tiny: 'tiny',
    small: 'small',
    medium: 'medium',
    large: 'large',
    ['x-large']: 'x-large',
    big: 'big',
    huge: 'huge'
  }

  it('is mounted', () => {
    const { getByTestId } = renderSpreader()

    const spreader = getByTestId('spreader')

    expect(spreader).toBeVisible()
  })

  it('default rendered spreader should has CSS class with --medium modifier', () => {
    const { getByTestId } = renderSpreader()

    const spreader = getByTestId('spreader')

    expect(spreader).toHaveClass('spreader--medium')
  })

  it('default rendered spreader should has CSS class with --medium modifier', () => {
    const { getByTestId } = renderSpreader()

    const spreader = getByTestId('spreader')

    expect(spreader).toHaveClass('spreader--medium')
  })

  it(`spreader with spread="mini" props should has CSS class with --mini modifier`, () => {
    const { mini } = spread

    const { getByTestId } = renderSpreader({ spread: mini })

    const spreader = getByTestId('spreader')

    expect(spreader).toHaveClass('spreader--mini')
  })

  it(`spreader with spread="tiny" props should has CSS class with --tiny modifier`, () => {
    const { tiny } = spread

    const { getByTestId } = renderSpreader({ spread: tiny })

    const spreader = getByTestId('spreader')

    expect(spreader).toHaveClass('spreader--tiny')
  })

  it(`spreader with spread="small" props should has CSS class with --small modifier`, () => {
    const { small } = spread

    const { getByTestId } = renderSpreader({ spread: small })

    const spreader = getByTestId('spreader')

    expect(spreader).toHaveClass('spreader--small')
  })

  it(`spreader with spread="large" props should has CSS class with --large modifier`, () => {
    const { large } = spread

    const { getByTestId } = renderSpreader({ spread: large })

    const spreader = getByTestId('spreader')

    expect(spreader).toHaveClass('spreader--large')
  })

  it(`spreader with spread="x-large" props should has CSS class with --x-large modifier`, () => {
    const { getByTestId } = renderSpreader({ spread: spread['x-large'] })

    const spreader = getByTestId('spreader')

    expect(spreader).toHaveClass('spreader--x-large')
  })

  it(`spreader with spread="big" props should has CSS class with --big modifier`, () => {
    const { big } = spread

    const { getByTestId } = renderSpreader({ spread: big })

    const spreader = getByTestId('spreader')

    expect(spreader).toHaveClass('spreader--big')
  })

  it(`spreader with spread="huge" props should has CSS class with --huge modifier`, () => {
    const { huge } = spread

    const { getByTestId } = renderSpreader({ spread: huge })

    const spreader = getByTestId('spreader')

    expect(spreader).toHaveClass('spreader--huge')
  })
})
