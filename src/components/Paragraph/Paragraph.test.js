import React from 'react'
import { render } from '@jestutils'
import Paragraph from '@components/Paragraph'

describe('<Paragraph /> mount', () => {
  it('is mounted', () => {
    render(<Paragraph>Test</Paragraph>)
  })
})
