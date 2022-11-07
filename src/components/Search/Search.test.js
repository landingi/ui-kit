import React from 'react'
import Search from '@components/Search'
import { render } from '@testing-library/react'

const mockOnSubmit = jest.fn()
const mockOnProtectedSubmit = jest.fn()

const props = {
  className: 'search',
  size: 'medium',
  autoFocus: true,
  onChange: () => null,
  onsubmit: mockOnSubmit(),
  onProtectedSubmit: mockOnProtectedSubmit(),
  children: 'children',
  variant: 'input',
  label: null
}

describe('<Search/> tests', () => {
  it('renders properly', () => {
    render(<Search {...props} />)
  })

  it('default prop `onChange` should be undefined', () => {
    const result = Search.defaultProps.onChange()

    expect(result).toBe(null)
  })

  it('default prop `onKeyDown` should be undefined', () => {
    const result = Search.defaultProps.onKeyDown()

    expect(result).toBe(null)
  })

  it('renders properly button variant', () => {
    const props = {
      className: 'search',
      size: 'medium',
      autoFocus: true,
      onChange: () => null,
      onsubmit: mockOnSubmit(),
      onProtectedSubmit: mockOnProtectedSubmit(),
      children: 'children',
      variant: 'button',
      label: null
    }

    render(<Search {...props} />)
  })
})
