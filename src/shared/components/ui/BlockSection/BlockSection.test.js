import React from 'react'
import BlockSection from '@components/ui/BlockSection'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Heading from '@components/ui/Heading'
import Paragraph from '@components/ui/Paragraph'
import Button from '@components/ui/Button'

describe('<BlockSection/> mount', () => {
  const props = {
    className: 'class-name',
    title: <Heading>Title</Heading>,
    message: <Paragraph>Message</Paragraph>,
    button: <Button>Button</Button>,
    onClick: jest.fn(),
    url: '/payments/subscription/cancel',
    reverse: true,
    list: ['list']
  }

  it('should render <BlockSection/>', () => {
    const { getByText } = render(<BlockSection {...props} />)

    const title = getByText('Title')

    expect(title).toBeTruthy()
  })
  it('should have class class-name', () => {
    const { getByTestId } = render(<BlockSection {...props} />)

    const block = getByTestId('block')

    expect(block).toHaveClass('class-name')
  })
})
