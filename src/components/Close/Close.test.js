import React from 'react'
import { render } from '@testing-library/react'
import Close from '@components/Close'

const onClick = jest.fn()

const props = {
  onClick
}

describe('<Close/> mount', () => {
  it('is mounted', () => {
    render(<Close {...props} />)
  })
})
