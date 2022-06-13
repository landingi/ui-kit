import React from 'react'
import InfoSection from '@components/InfoSection'
import { render } from '@jestutils'

const props = {
  title: 'empty.list.message.domains.title',
  url: '/assets/img/empty/domains/domain_empty.png',
  button: 'empty.list.message.domains.button',
  list: [
    'empty.list.message.domains.item1',
    'empty.list.message.domains.item2',
    'empty.list.message.domains.item3'
  ],
  onClick: () => null
}

describe('<InfoSection /> tests', () => {
  it('renders properly', () => {
    render(<InfoSection {...props} />)
  })

  it('expect "Let your landing page go live!"', () => {
    const { getByText } = render(<InfoSection {...props} />)

    const title = getByText('empty.list.message.domains.title')

    expect(title).toBeDefined()
  })

  it('expect "Add a domain in a few easy steps"', () => {
    const { getByText } = render(<InfoSection {...props} />)

    const item = getByText('empty.list.message.domains.item1')

    expect(item).toBeDefined()
  })

  it('expect "Get a free SSL certificate"', () => {
    const { getByText } = render(<InfoSection {...props} />)

    const item = getByText('empty.list.message.domains.item2')

    expect(item).toBeDefined()
  })

  it('expect "Take advantage of multiple publishing options"', () => {
    const { getByText } = render(<InfoSection {...props} />)

    const item = getByText('empty.list.message.domains.item3')

    expect(item).toBeDefined()
  })
})
