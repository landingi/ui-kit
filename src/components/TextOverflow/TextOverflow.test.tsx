import '@testing-library/jest-dom'

import { TextOverflow } from '@components/TextOverflow'
import { render, screen } from '@testing-library/react'

describe('<TextOverflow/> mount', () => {
  it('is mounted', () => {
    render(<TextOverflow>Text</TextOverflow>)
  })

  it('has `overflow` class', () => {
    render(<TextOverflow>Text</TextOverflow>)

    const overflow = screen.getByTestId('overflow')

    expect(overflow).toHaveClass('overflow')
  })
})
