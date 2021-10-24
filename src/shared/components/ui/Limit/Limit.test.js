import React from 'react'
import Limit from '@components/ui/Limit'
import registerIcons from '@helpers/icons'
import { mountWithIntl } from '@jestutils'

registerIcons()

const limitsComponent = (
  <Limit
    icon='users'
    limit={30000}
    name='word.custom.domains'
    quantity={100}
    tooltip='word.custom.domains.tooltip'
  />
)

describe('<Limit /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(limitsComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('must display `svg`', () => {
    expect(wrapper.exists('svg')).toEqual(true)
  })

  it('limit should be ` / 30 000`', () => {
    expect(wrapper.find('.info--limit').text()).toEqual(' / 30 000')
  })

  it('quantity should be `100`', () => {
    expect(wrapper.find('.info--quantity').text()).toEqual('100')
  })

  // it('name should be `Custom domains`', () => {
  //   expect(
  //     wrapper.find('.info--name').find(FormattedMessage).first().text()
  //   ).toEqual('Custom domains')
  // })

  it('must display `Tooltip`', () => {
    expect(wrapper.exists('Tooltip')).toEqual(true)
  })
})
