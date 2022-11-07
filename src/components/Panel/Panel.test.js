import React from 'react'
import { render } from '@testing-library/react'
import Panel from '@components/Panel'

const props = {
  children: 'placeholder'
}

describe('<Panel/> mount', () => {
  it('is mounted', () => {
    render(<Panel {...props}>{props.children}</Panel>)
  })
})
