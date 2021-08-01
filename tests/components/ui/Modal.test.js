import React from 'react'
import { mount } from 'enzyme'
import registerIcons from 'shared/helpers/icons'
import Modal from '@components/ui/Modal'
import Backdrop from '@components/ui/Backdrop'

registerIcons()

const props = {
  isActive: true,
  onClick: onClick,
  children: 'children'
}
const modalComponent = <Modal {...props} />

const onClick = jest.fn()

describe('<Modal /> global mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(modalComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `modal` class', () => {
    expect(wrapper.hasClass('modal')).toBe(true)
  })

  it('should have defined default prop onClick', () => {
    expect(wrapper.props().onClick).toBeDefined()
  })

  it('default prop `onClick` should be null', () => {
    const result = Modal.defaultProps.onClick()
    expect(result).toBe(null)
  })

  it('should have defined default prop isClosable', () => {
    expect(wrapper.props().isClosable).toBeDefined()
  })

  it('should display backdrop when isActive', () => {
    expect(wrapper.find(Backdrop).exists()).toBe(true)
  })
})
