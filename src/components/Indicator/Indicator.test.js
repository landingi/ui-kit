import Indicator from '@components/Indicator'
import { render } from '@testing-library/react'
import React from 'react'

const props = {
  children: 'Indicator'
}

describe('<Indicator/> mount', () => {
  it('is mounted', () => {
    render(<Indicator {...props} />)
  })
})
