import React from 'react'
import { ShortLogo, LongLogo } from '@components/global/Logo'
import { render } from '@jestutils'

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
