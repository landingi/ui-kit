import React from 'react'
import { mount } from 'enzyme'
import registerIcons from '@helpers/icons'
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

  it('should align the button to the right', () => {
    wrapper.setProps({
      align: 'right',
      hasFooter: true
    })

    expect(wrapper.find('div.modal__footer').prop('className')).toEqual('modal__footer modal__footer--align-right')
  })

  it('has header', () => {
    expect(wrapper.find('div.modal__header').exists()).toBe(true)
  })

  it('has title in the header', () => {
    wrapper.setProps({
      i18n: {
        title: 'some title'
      }
    })

    expect(wrapper.find('Heading').text()).toEqual('some title')
  })

  it('has image in the header', () => {
    wrapper.setProps({
      image: 'http://www.landingi.com/logo.png'
    })

    expect(wrapper.find('Image').prop('src')).toEqual('http://www.landingi.com/logo.png')
  })

  it('has button mark as spam in the header and triggers onMarkAsSpam callback', () => {
    const mockonMarkAsSpam = jest.fn()

    wrapper.setProps({
      isMarkAsSpamVisible: true,
      onMarkAsSpam: jest.fn()
    })

    expect(wrapper.find('Button').at(0).find('FontAwesomeIcon').prop('icon')).toEqual('ban')

    wrapper.find('Button').at(0).simulate('click')

    expect(wrapper.prop('onMarkAsSpam')).toHaveBeenCalledTimes(1)
  })

  it('has button edit in the header and triggers onEdit callback', () => {
    wrapper.setProps({
      isEditable: true,
      onEdit: jest.fn()
    })

    expect(wrapper.find('Button').at(0).find('FontAwesomeIcon').prop('icon')).toEqual('pencil-alt')

    wrapper.find('Button').at(0).simulate('click')

    expect(wrapper.prop('onEdit')).toHaveBeenCalledTimes(1)
  })
})
