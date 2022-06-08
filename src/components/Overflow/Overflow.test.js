import React from 'react'
import { render } from '@jestutils'
import Overflow from '@components/ui/Overflow'

const props = {
  children: 'placeholder'
}
describe('<Overflow/> mount', () => {
  it('is mounted', () => {
    render(<Overflow {...props}>{props.children}</Overflow>)
  })
})
