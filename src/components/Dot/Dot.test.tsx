import { Dot } from '@components/Dot'
import { render } from '@testing-library/react'

describe('<Dot /> tests', () => {
  it('renders properly', () => {
    render(<Dot />)
  })

  it('renders properly with label', () => {
    const { findByText } = render(<Dot label='test label' />)

    expect(findByText('test label')).toBeTruthy()
  })
})
