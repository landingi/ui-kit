import React from 'react'
import { render, screen } from '@testing-library/react'
import Error from './Error'

describe('ErrorPresenter tests', () => {
  it('properly renders', () => {
    render(<Error />)
  })

  it('properly renders with custom error', () => {
    render(<Error error='error-name' />)

    expect(screen.findByText('error-name')).toBeTruthy()
  })
})
