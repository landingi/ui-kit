import '@testing-library/jest-dom'

import { CustomLink } from '@components/CustomLink'
import { fireEvent, render } from '@testing-library/react'

describe('<CustomLink/> tests', () => {
  const props = { label: 'Custom link' }

  it('mount', () => {
    render(<CustomLink {...props} />)
  })

  it('mount & simulate click', () => {
    const { getByTestId } = render(<CustomLink {...props} />)

    const customLink = getByTestId('custom-link')

    fireEvent.click(customLink)
  })

  it('has bold', () => {
    const { getByTestId } = render(<CustomLink bold {...props} />)

    const customLink = getByTestId('custom-link')

    expect(customLink).toHaveClass('custom-link--bold')
  })
})
