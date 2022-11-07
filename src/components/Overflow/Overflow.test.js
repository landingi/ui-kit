import Overflow from '@components/Overflow'
import { render } from '@testing-library/react'
import React from 'react'

const props = {
  children: 'placeholder'
}
describe('<Overflow/> mount', () => {
  it('is mounted', () => {
    render(<Overflow {...props}>{props.children}</Overflow>)
  })
})
