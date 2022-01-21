import React from 'react'
import { render } from '@jestutils'
import registerIcons from '@helpers/icons'
import Paragraph from '@components/ui/Paragraph'

registerIcons()

describe('<Paragraph /> mount', () => {
  it('is mounted', () => {
    render(<Paragraph>Test</Paragraph>)
  })
})
