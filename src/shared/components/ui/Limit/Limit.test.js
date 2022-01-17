import React from 'react'
import { render } from '@jestutils'
import registerIcons from '@helpers/icons'
import Limit from '@components/ui/Limit'

registerIcons()

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
