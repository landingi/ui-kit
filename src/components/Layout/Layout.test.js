import Layout from '@components/Layout'
import { render } from '@testing-library/react'
import React from 'react'

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
