import React from 'react'
import ShowPassword from '@components/ui/ShowPassword'
import registerIcons from 'shared/helpers/icons'
import { mountWithIntl } from '../../setup/mocks/intl-enzyme-test-helper'
import { FormattedMessage } from 'react-intl'

registerIcons()

const props = {
  className: 'showpassword',
  setHidden: () => null
}

const component = <ShowPassword {...props} />

describe('<ShowPassword/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(component)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `showpassword` class', () => {
    expect(wrapper.hasClass('showpassword')).toBe(true)
  })

  it('has label', () => {
    wrapper.setProps({
      hasLabel: true
    })

    expect(wrapper.find(FormattedMessage).text()).toEqual('Show')
  })
})
