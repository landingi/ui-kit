import '@testing-library/jest-dom'

import ColorLine from '@components/ColorLine'
import { render, screen } from '@testing-library/react'
import React from 'react'

describe('<ColorLine /> mount', () => {
  it('is mounted', () => {
    render(<ColorLine variant='success' />)

    const colorLineComponent = screen.getByTestId('colorline')
    expect(colorLineComponent).toHaveClass('color-line')
  })

  it('has vertical alignment by default', () => {
    render(<ColorLine variant='success' />)

    const colorLineComponent = screen.getByTestId('colorline')

    expect(colorLineComponent).toHaveClass('color-line--vertical')
  })

  it('has horizontal alignment', () => {
    render(<ColorLine variant='success' alignment='horizontal' />)

    const colorLineComponent = screen.getByTestId('colorline')

    expect(colorLineComponent).toHaveClass('color-line--horizontal')
  })

  it('has success variant', () => {
    render(<ColorLine variant='success' />)

    const colorLineComponent = screen.getByTestId('colorline')

    expect(colorLineComponent).toHaveClass('color-line--success')
  })

  it('has warning variant', () => {
    render(<ColorLine variant='warning' />)

    const colorLineComponent = screen.getByTestId('colorline')

    expect(colorLineComponent).toHaveClass('color-line--warning')
  })

  it('has alert variant', () => {
    render(<ColorLine variant='alert' />)

    const colorLineComponent = screen.getByTestId('colorline')

    expect(colorLineComponent).toHaveClass('color-line--alert')
  })

  it('has info variant', () => {
    render(<ColorLine variant='info' />)

    const colorLineComponent = screen.getByTestId('colorline')

    expect(colorLineComponent).toHaveClass('color-line--info')
  })
})
