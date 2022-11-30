import '@testing-library/jest-dom'

import Backdrop from '@components/Backdrop'
import { render, screen } from '@testing-library/react'
import React from 'react'

describe('<Backdrop /> mount', () => {
  it('is mounted', () => {
    render(<Backdrop />)
  })

  it('has backdrop class', () => {
    render(<Backdrop />)
    expect(screen.getByTestId('backdrop')).toHaveClass('backdrop')
  })

  it('has z-index class', () => {
    render(<Backdrop zIndex='6' />)
    expect(screen.getByTestId('backdrop')).toHaveClass('backdrop__index-6')
  })

  it('has onclick handler', () => {
    const handleOnClick = jest.fn()

    render(<Backdrop onClick={handleOnClick} />)
    const backdrop = screen.getByTestId('backdrop')
    backdrop.click()

    expect(handleOnClick).toHaveBeenCalled()
  })
})
