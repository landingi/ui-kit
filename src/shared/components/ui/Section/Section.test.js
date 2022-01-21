import React from 'react'
import { render } from '@jestutils'
import Section from '@components/ui/Section'

const props = {
  children: 'placeholder'
}

describe('<Section/> mount', () => {
  it('is mounted', () => {
    render(<Section {...props}>{props.children}</Section>)
  })
})
