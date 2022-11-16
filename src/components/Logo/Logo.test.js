import { LongLogo, ShortLogo } from '@components/Logo'
import { render } from '@testing-library/react'
import React from 'react'

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
