import React from 'react'
import { mount } from 'enzyme'
import Modal from '@components/ui/Modal'
import Backdrop from '@components/ui/Backdrop'
import Button from '@components/ui/Button'

const props = {
  isActive: true,
  onClick: onClick,
  children: <Button> Jestem przyciskiem</Button>,
  i18n: {
    cancel: 'cancel'
  }
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

  it('should have defined default prop onClick', () => {
    expect(wrapper.props().onClick).toBeDefined()
  })

  it('default prop `onClick` should be null', () => {
    const result = Modal.defaultProps.onClick()

    expect(result).toBe(null)
  })

  it('default prop `onAction` should be null', () => {
    const result = Modal.defaultProps.onAction()

    expect(result).toBe(null)
  })

  it('default prop `onEdit` should be null', () => {
    const result = Modal.defaultProps.onEdit()

    expect(result).toBe(null)
  })

  it('should have defined default prop isClosable', () => {
    expect(wrapper.props().isClosable).toBeDefined()
  })

  it('should have defined default prop i18n', () => {
    expect(wrapper.props().i18n).toBeDefined()
  })

  it('should have defined default prop image', () => {
    expect(wrapper.props().image).toBeDefined()
  })

  it('should have defined default prop isEditable', () => {
    expect(wrapper.props().isEditable).toBeDefined()
  })

  it('should display backdrop when isActive', () => {
    expect(wrapper.find(Backdrop).exists()).toBe(true)
  })

  it('should align the button to the right', () => {
    wrapper.setProps({
      align: 'right',
      hasFooter: true
    })

    expect(wrapper.find('div.modal__footer').prop('className')).toEqual(
      'modal__footer modal__footer--align-right'
    )
  })

  it('has loader when isLoading se to true', () => {
    wrapper.setProps({
      isLoading: true
    })

    expect(wrapper.find('Loader').exists()).toBe(true)
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

    expect(wrapper.find('Image').prop('src')).toEqual(
      'http://www.landingi.com/logo.png'
    )
  })

  it('has button mark as spam in the header and triggers onMarkAsSpam callback', () => {
    wrapper.setProps({
      isMarkAsSpamVisible: true,
      onMarkAsSpam: jest.fn()
    })

    expect(wrapper.find('Button').at(0).find('Icon').prop('icon')).toEqual(
      'ban'
    )

    wrapper.find('Button').at(0).simulate('click')

    expect(wrapper.prop('onMarkAsSpam')).toHaveBeenCalledTimes(1)
  })

  it('has button edit in the header and triggers onEdit callback', () => {
    wrapper.setProps({
      isEditable: true,
      onEdit: jest.fn()
    })

    expect(wrapper.find('Button').at(0).find('Icon').prop('icon')).toEqual(
      'pencil-alt'
    )

    wrapper.find('Button').at(0).simulate('click')

    expect(wrapper.prop('onEdit')).toHaveBeenCalledTimes(1)
  })

  it('has component in the header', () => {
    wrapper.setProps({
      isComponent: true
    })

    expect(wrapper.find('div.modal__component').exists()).toBe(true)
    expect(
      wrapper.find('div.modal__component').hasClass('modal__component')
    ).toBe(true)
  })

  it('has header divider', () => {
    wrapper.setProps({
      hasHeaderDivider: true
    })

    expect(wrapper.find('Divider').exists()).toBe(true)
  })

  it('has not header divider', () => {
    wrapper.setProps({
      hasHeaderDivider: false
    })

    expect(wrapper.find('Divider').exists()).toBe(false)
  })

  it('has footer divider', () => {
    wrapper.setProps({
      hasFooterDivider: true
    })

    expect(wrapper.find('Divider').exists()).toBe(true)
  })

  it('has not footer divider', () => {
    wrapper.setProps({
      hasHeaderDivider: false
    })

    expect(wrapper.find('Divider').exists()).toBe(false)
  })

  it('has custom button in the footer', () => {
    wrapper.setProps({
      hasCustomButton: true,
      hasFooter: true
    })

    expect(wrapper.find('div.modal__footer').exists()).toBe(true)
    expect(wrapper.find('div.modal__footer').find('Button').at(0)).toEqual({})
  })

  it('should have button type submit when isSubmit', () => {
    wrapper.setProps({
      isSubmit: true,
      hasFooter: true
    })

    expect(wrapper.find('div.modal__footer').exists()).toBe(true)
    expect(
      wrapper.find('div.modal__footer').find('Button').at(1).prop('type')
    ).toEqual('submit')
  })

  it('should have button type button when isSubmit set to false', () => {
    wrapper.setProps({
      isSubmit: false,
      hasFooter: true
    })

    expect(wrapper.find('div.modal__footer').exists()).toBe(true)
    expect(
      wrapper.find('div.modal__footer').find('Button').at(1).prop('type')
    ).toEqual('button')
  })

  it('should have action icon in the action button', () => {
    wrapper.setProps({
      isSubmit: false,
      hasFooter: true,
      actionIcon: 'times'
    })

    expect(wrapper.find('div.modal__footer').exists()).toBe(true)
    expect(
      wrapper
        .find('div.modal__footer')
        .find('Button')
        .at(1)
        .find('Icon')
        .prop('icon')
    ).toEqual('times')
  })
})
