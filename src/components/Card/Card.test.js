import '@testing-library/jest-dom'

import Card from '@components/Card'
import { Paragraph } from '@components/Paragraph'
import { render } from '@testing-library/react'
import React from 'react'

describe('<Card /> mount', () => {
  const props = {
    variant: 'alert',
    children: <Paragraph>Alert text</Paragraph>
  }

  it('should display proper text', () => {
    const { getByText } = render(<Card {...props} />)

    const paragraph = getByText('Alert text')

    expect(paragraph).toBeTruthy()
  })

  it('should display alert variant', () => {
    const { getByTestId } = render(<Card {...props} />)

    const card = getByTestId('card')

    expect(card).toHaveClass('card--alert')
  })
})
