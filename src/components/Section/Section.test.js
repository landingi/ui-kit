import React from 'react'
import { render } from '@testing-library/react'
import Section from '@components/Section'

const props = {
  children: 'placeholder'
}

describe('<Section/> mount', () => {
  it('is mounted', () => {
    render(<Section {...props}>{props.children}</Section>)
  })
})
