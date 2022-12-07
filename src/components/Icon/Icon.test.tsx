import { Icon } from '@components/Icon'
import { render } from '@testing-library/react'
import React from 'react'

const props = {
  icon: 'icon-configure'
}

describe('<Icon /> mount', () => {
  it('is mounted', () => {
    render(<Icon {...props} />)
  })
})
