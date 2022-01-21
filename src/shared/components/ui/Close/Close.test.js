import React from 'react'
import { render } from '@jestutils'
import Close from '@components/ui/Close'

const onClick = jest.fn()

const props = {
  onClick: onClick
}

describe('<Close/> mount', () => {
  it('is mounted', () => {
    render(<Close {...props} />)
  })
})
