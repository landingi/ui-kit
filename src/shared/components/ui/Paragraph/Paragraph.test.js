import React from 'react'
import { render } from '@testing-library/react'
import Paragraph from '@components/ui/Paragraph'

describe('<Paragraph/> mount', () => {
  const props = {
    children: 'placeholder'
  }

  it('should display proper children', () => {
    render(<Paragraph {...props} />)
  })
})
