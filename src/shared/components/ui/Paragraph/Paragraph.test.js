import React from 'react'
import { render, screen } from '@testing-library/react'
import Paragraph from '@components/ui/Paragraph'

describe('<Paragraph/> mount', () => {
  const props = {
    children: 'placeholder'
  }

  it('should display proper children', () => {
    render(<Paragraph {...props} />)
  })

  it('should display proper paragraph', () => {
    render(<Paragraph {...props} />)

    const paragraph = screen.getByText(props.children)

    expect(paragraph).toBeTruthy()
  })
})
