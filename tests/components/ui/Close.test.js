import React from 'react'
import { mount } from 'enzyme'
import Close from '@components/ui/Close'
import registerIcons from '@helpers/icons'

registerIcons()

const onClick = jest.fn()

const props = {
  onClick: onClick
}

const listComponent = <Close {...props} />

describe('<Close/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(listComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `close` class', () => {
    expect(wrapper.hasClass('close')).toBe(true)
  })

  it('calls function passed as onClick prop on click event', () => {
    wrapper.simulate('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('should have defined default prop onClick', () => {
    expect(Close.defaultProps.onClick).toBeDefined()
  })

  it('default prop `onClick` should be null', () => {
    const result = Close.defaultProps.onClick()
    expect(result).toBe(null)
  })
})
