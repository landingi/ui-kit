import React from 'react'
import { render } from '@jestutils'
import Layout from '@components/Layout'

describe('<Layout /> mount', () => {
  const props = {
    children: 'Test'
  }

  it('is mounted', () => {
    render(<Layout {...props} />)
  })
})

describe('<Layout /> mount', () => {
  const props = {
    children: 'Test',
    width: 'big'
  }

  it('is mounted', () => {
    render(<Layout {...props} />)
  })
})

describe('<Layout /> mount', () => {
  const props = {
    children: 'Test',
    width: 'large'
  }

  it('is mounted', () => {
    render(<Layout {...props} />)
  })
})
