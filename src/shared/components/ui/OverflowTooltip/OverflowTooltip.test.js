import React from 'react'
import { mount } from 'enzyme'
import OverflowTooltip from '@components/ui/OverflowTooltip'
import Tooltip from '@components/ui/Tooltip'

const props = {
  content: 'foobar',
  length: 100,
  placement: 'left',
  children: 'child'
}

const overflowComponent = (
  <OverflowTooltip {...props}>{props.children}</OverflowTooltip>
)

describe('<OverflowTooltip/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(overflowComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `overflow-tooltip` class', () => {
    expect(wrapper.hasClass('overflow-tooltip')).toBe(true)
  })

  it('displays whole content unless exceeds given length', () => {
    expect(wrapper.text()).toEqual('foobar')
    expect(wrapper.find(Tooltip).length).toBe(0)
  })

  it('trims content if exceeds given length and renders <Tooltip/> with whole content', () => {
    wrapper.setProps({
      length: 3
    })

    expect(
      wrapper.find('.overflow-tooltip div div').first().text() +
        wrapper.find('.overflow-tooltip span').text()
    ).toEqual('foo...child')
    expect(wrapper.find(Tooltip).length).toBe(1)
    expect(wrapper.find(Tooltip).props().content).toEqual(props.content)
    expect(wrapper.find(Tooltip).props().align).toEqual(props.placement)
  })

  it('renders only trimmed text if there are no children', () => {
    wrapper.setProps({
      length: 3,
      children: null
    })

    expect(wrapper.find('.overflow-tooltip span').text()).toEqual('foo...')
    expect(wrapper.find(Tooltip).length).toBe(1)
    expect(wrapper.find(Tooltip).props().content).toEqual(props.content)
    expect(wrapper.find(Tooltip).props().align).toEqual(props.placement)
  })
})
