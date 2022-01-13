import React from 'react'
import ShowPassword from '@components/ui/ShowPassword'
import registerIcons from '@helpers/icons'
import { mountWithIntl } from '@jestutils'

registerIcons()

const component = <ShowPassword />

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

  it('default prop `setHidden` should be undefined', () => {
    const result = ShowPassword.defaultProps.setHidden()

    expect(result).toBe(null)
  })
})
