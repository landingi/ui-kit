import { Paragraph } from '@components/Paragraph'
import { render } from '@testing-library/react'

describe('<Paragraph /> mount', () => {
  it('is mounted', () => {
    render(<Paragraph>Test</Paragraph>)
  })
})
