import React from 'react'
import { mount } from 'enzyme'
import Button from '@components/ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import registerIcons from '@helpers/icons'

registerIcons()

const onClick = jest.fn()

const props = {
  tag: 'a',
  title: undefined,
  type: 'button',
  href: undefined,
  target: undefined,
  className: 'button',
  children: 'Placeholder',
  isLoading: false,
  isDisabled: false,
  onClick: onClick
}

const buttonComponent = (
  <Button {...props}>{props.children}</Button>
)

describe('<Button/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(buttonComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `button` class', () => {
    expect(wrapper.hasClass('button')).toBe(true)
  })

  it('when prop isLoading is true, spinner is visible', () => {
    wrapper.setProps({
      isLoading: true
    })

    expect(wrapper.find(FontAwesomeIcon).exists()).toBe(
      true
    )
  })

  it('when prop isLoading is false, spinner is not visible', () => {
    wrapper.setProps({
      isLoading: false
    })

    expect(wrapper.find(FontAwesomeIcon).exists()).toBe(
      false
    )
  })

  it('renders text', () => {
    expect(wrapper.text()).toEqual(props.children)
  })

  it('calls function passed as onClick prop on click event', () => {
    wrapper.simulate('click')

    expect(onClick).toHaveBeenCalled()
  })
})

describe('<Button/> mount as a link', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(buttonComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  beforeEach(() => {
    wrapper.setProps({
      tag: 'a'
    })
  })
  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('is A tag', () => {
    expect(wrapper.children().type()).toBe('a')
  })

  it('has title', () => {
    wrapper.setProps({
      title: 'Title test'
    })
    expect(wrapper.children().prop('title')).toBe(
      'Title test'
    )
  })

  it('has href', () => {
    wrapper.setProps({
      href: 'http://wwww.google.com'
    })
    expect(wrapper.children().prop('href')).toBe(
      'http://wwww.google.com'
    )
  })

  it('has target', () => {
    wrapper.setProps({
      target: '_blank'
    })
    expect(wrapper.children().prop('target')).toBe('_blank')
  })

  it('is target false', () => {
    expect(wrapper.children().prop('target')).toBe(
      undefined
    )
  })
})
