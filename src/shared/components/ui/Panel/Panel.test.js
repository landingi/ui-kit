import React from 'react'
import { render } from '@jestutils'
import Panel from '@components/ui/Panel'

const props = {
  children: 'placeholder'
}

describe('<Panel/> mount', () => {
  it('is mounted', () => {
    render(<Panel {...props}>{props.children}</Panel>)
  })
})
