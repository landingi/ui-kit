import Section from '@components/Section'
import { render } from '@testing-library/react'
import React from 'react'

const props = {
  children: 'placeholder'
}

describe('<Section/> mount', () => {
  it('is mounted', () => {
    render(<Section {...props}>{props.children}</Section>)
  })
})
