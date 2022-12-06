import '@testing-library/jest-dom'

import { Card } from '@components/Card'
import { Paragraph } from '@components/Paragraph'
import { render } from '@testing-library/react'

describe('<Card /> mount', () => {
  it('should display proper text', () => {
    const { getByText } = render(
      <Card variant='alert'>
        <Paragraph>Alert text</Paragraph>
      </Card>
    )

    const paragraph = getByText('Alert text')

    expect(paragraph).toBeTruthy()
  })

  it('should display alert variant', () => {
    const { getByTestId } = render(
      <Card variant='alert'>
        <Paragraph>Alert text</Paragraph>
      </Card>
    )

    const card = getByTestId('card')

    expect(card).toHaveClass('card--alert')
  })
})
