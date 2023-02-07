import { Search } from '@components/Search'
import { render } from '@testing-library/react'

const mockOnSubmit = jest.fn()
const mockOnProtectedSubmit = jest.fn()

const props = {
  className: 'search',
  size: 'medium' as const,
  autoFocus: true,
  onChange: () => null,
  onsubmit: mockOnSubmit(),
  onProtectedSubmit: mockOnProtectedSubmit(),
  children: 'children',
  variant: 'input' as const,
  label: null
}

describe('<Search/> tests', () => {
  it('renders properly', () => {
    render(<Search {...props} />)
  })

  it('renders properly button variant', () => {
    const variantProps = {
      className: 'search',
      size: 'medium' as const,
      autoFocus: true,
      onChange: () => null,
      onsubmit: mockOnSubmit(),
      onProtectedSubmit: mockOnProtectedSubmit(),
      children: 'children',
      variant: 'button' as const,
      label: null
    }

    render(<Search {...variantProps} />)
  })
})
