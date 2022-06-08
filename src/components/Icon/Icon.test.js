import React from 'react'
import { render } from '@jestutils'
import Icon from '@components/Icon'

const props = {
  icon: 'icon-configure'
}

describe('<Icon /> mount', () => {
  it('is mounted', () => {
    render(<Icon {...props} />)
  })
})
