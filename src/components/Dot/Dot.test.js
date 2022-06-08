import React from 'react'
import { render } from '@jestutils'
import Dot from '@components/Dot'

describe('<Dot /> tests', () => {
  it('renders properly', () => {
    render(<Dot />)
  })

  it('renders properly with label', () => {
    const { findByText } = render(<Dot label='test label' />)

    expect(findByText('test label')).toBeTruthy()
  })
})
