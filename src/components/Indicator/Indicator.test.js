import React from 'react'
import { render } from '@jestutils'
import Indicator from '@components/Indicator'

const props = {
  children: 'Indicator'
}

describe('<Indicator/> mount', () => {
  it('is mounted', () => {
    render(<Indicator {...props} />)
  })
})
