import React from 'react'
import { render } from '@jestutils'
import Checkbox from '@components/ui/Checkbox'

const props = {
  onChange: jest.fn(),
  checked: false
}

describe('<Checkbox /> tests', () => {
  it('renders properly', () => {
    render(<Checkbox {...props} />)
  })
})
