import React from 'react'
import { ShortLogo, LongLogo } from '@components/Logo'
import { render } from '@testing-library/react'

describe('<ShortLogo/> mount', () => {
  it('is mounted', () => {
    render(<ShortLogo />)
  })
})

describe('<LongLogo /> mount', () => {
  it('is mounted', () => {
    render(<LongLogo />)
  })
})
