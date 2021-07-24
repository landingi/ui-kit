import React from 'react'
import { mount } from 'enzyme'
import Backdrop from 'shared/components/ui/Backdrop'

const onClick = jest.fn()

const props = {
  onClick: onClick
}

const backdropComponent = <Backdrop {...props} />

describe('<Backdrop/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(backdropComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `backdrop` class', () => {
    expect(wrapper.hasClass('backdrop')).toBe(true)
  })

  it('calls function passed as onClick prop on click event', () => {
    wrapper.simulate('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('should have defined default prop onClick', () => {
    expect(Backdrop.defaultProps.onClick).toBeDefined()
  })

  it('default prop `onClick` should be null', () => {
    const result = Backdrop.defaultProps.onClick()
    expect(result).toBe(null)
  })
})
