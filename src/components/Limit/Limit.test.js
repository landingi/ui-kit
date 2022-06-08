import React from 'react'
import { render } from '@jestutils'
import Limit from '@components/Limit'

describe('<Limit /> mount', () => {
  const props = {
    icon: 'users',
    limit: 30000,
    name: 'word.custom.domains',
    quantity: 100
  }

  it('is mounted', () => {
    render(<Limit {...props} />)
  })
})

describe('<Limit /> mount', () => {
  const props = {
    icon: 'users',
    limit: 30000,
    name: 'word.custom.domains',
    quantity: 100,
    tooltip: 'word.custom.domains.tooltip',
    unlimited: true,
    total: 200
  }

  it('is mounted', () => {
    render(<Limit {...props} />)
  })
})
