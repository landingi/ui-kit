import React from 'react'
import ColorNumber from '@components/ColorNumber'
import { render, screen } from '@jestutils'
import '@testing-library/jest-dom'

describe('<ColorNumber /> mount', () => {
  it('is mounted', () => {
    render(<ColorNumber variant='success'>1</ColorNumber>)

    screen.getByText('1')

    const colorNumberComponent = screen.getByTestId('color-number')
    expect(colorNumberComponent).toHaveClass('color-number')
  })

  it('has success variant', () => {
    render(<ColorNumber variant='success'>1</ColorNumber>)

    const colorNumberComponent = screen.getByTestId('color-number')

    expect(colorNumberComponent).toHaveClass('color-number__color--success')
  })

  it('has alert variant', () => {
    render(<ColorNumber variant='alert'>1</ColorNumber>)

    const colorNumberComponent = screen.getByTestId('color-number')

    expect(colorNumberComponent).toHaveClass('color-number__color--alert')
  })

  it('has warning variant', () => {
    render(<ColorNumber variant='warning'>1</ColorNumber>)

    const colorNumberComponent = screen.getByTestId('color-number')

    expect(colorNumberComponent).toHaveClass('color-number__color--warning')
  })

  it('has default variant', () => {
    render(<ColorNumber variant='default'>1</ColorNumber>)

    const colorNumberComponent = screen.getByTestId('color-number')

    expect(colorNumberComponent).toHaveClass('color-number__color--default')
  })

  it('has progress variant', () => {
    render(<ColorNumber variant='progress'>1</ColorNumber>)

    const colorNumberComponent = screen.getByTestId('color-number')

    expect(colorNumberComponent).toHaveClass('color-number__color--progress')
  })

  it('has info variant', () => {
    render(<ColorNumber variant='info'>1</ColorNumber>)

    const colorNumberComponent = screen.getByTestId('color-number')

    expect(colorNumberComponent).toHaveClass('color-number__color--info')
  })

  it('has brand variant', () => {
    render(<ColorNumber variant='brand'>1</ColorNumber>)

    const colorNumberComponent = screen.getByTestId('color-number')

    expect(colorNumberComponent).toHaveClass('color-number__color--brand')
  })

  it('has white variant', () => {
    render(<ColorNumber variant='white'>1</ColorNumber>)

    const colorNumberComponent = screen.getByTestId('color-number')

    expect(colorNumberComponent).toHaveClass('color-number__color--white')
  })

  it('has font size 18 by default', () => {
    render(<ColorNumber variant='warning'>1</ColorNumber>)

    const colorNumberComponent = screen.getByTestId('color-number')

    expect(colorNumberComponent).toHaveClass('color-number__size--18')
  })

  it('has font size 10', () => {
    render(
      <ColorNumber variant='warning' size={10}>
        1
      </ColorNumber>
    )

    const colorNumberComponent = screen.getByTestId('color-number')

    expect(colorNumberComponent).toHaveClass('color-number__size--10')
  })

  it('has font size 12', () => {
    render(
      <ColorNumber variant='warning' size={12}>
        1
      </ColorNumber>
    )

    const colorNumberComponent = screen.getByTestId('color-number')

    expect(colorNumberComponent).toHaveClass('color-number__size--12')
  })

  it('has font size 16', () => {
    render(
      <ColorNumber variant='warning' size={16}>
        1
      </ColorNumber>
    )

    const colorNumberComponent = screen.getByTestId('color-number')

    expect(colorNumberComponent).toHaveClass('color-number__size--16')
  })

  it('has font size 32', () => {
    render(
      <ColorNumber variant='warning' size={32}>
        1
      </ColorNumber>
    )

    const colorNumberComponent = screen.getByTestId('color-number')

    expect(colorNumberComponent).toHaveClass('color-number__size--32')
  })

  it('has font size 44', () => {
    render(
      <ColorNumber variant='warning' size={44}>
        1
      </ColorNumber>
    )

    const colorNumberComponent = screen.getByTestId('color-number')

    expect(colorNumberComponent).toHaveClass('color-number__size--44')
  })

  it('has font size 62', () => {
    render(
      <ColorNumber variant='warning' size={62}>
        1
      </ColorNumber>
    )

    const colorNumberComponent = screen.getByTestId('color-number')

    expect(colorNumberComponent).toHaveClass('color-number__size--62')
  })
})
