import React from 'react'
import { mount } from 'enzyme'
import Tooltip from '@components/ui/Tooltip'
import ReactTooltip from 'react-tooltip'

const delay = time => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  })
}

jest.mock('react-uuid/uuid', () => () => '00000000-0000-0000-0000-000000000000')

const props = {
  placement: 'bottom',
  children: 'children',
  content: 'Content',
  className: 'custom'
}

const tooltipComponent = <Tooltip {...props}>{props.children}</Tooltip>

describe('<Tooltip/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(tooltipComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has ReactTooltip component', () => {
    expect(wrapper.find(ReactTooltip).length).toEqual(1)
  })

  it('has wrapper component', () => {
    expect(wrapper.find('span').hasClass('custom')).toBe(true)
  })

  it('has wrapper component with tip attribute', () => {
    expect(wrapper.find('span').props()['data-tip']).toBe(true)
  })

  it('has wrapper component with `for` attribute', () => {
    expect(wrapper.find('span').props()['data-for']).toBe(
      '00000000-0000-0000-0000-000000000000'
    )
  })
  it('add proper props when showOnClick is enabled', () => {
    wrapper.setProps({ showOnClick: true })
    const Tooltip = wrapper.find(ReactTooltip)

    expect(typeof Tooltip.props().afterShow).toBe('function')
    expect(Tooltip.props().event).toBe('click')
    expect(Tooltip.props().delayHide).toBe(1000)
  })
  it('Run afterShow after click when showOnClick is enabled', async () => {
    wrapper.setProps({ showOnClick: true })
    const Tooltip = wrapper.find(ReactTooltip)
    const spy = jest.spyOn(ReactTooltip, 'hide')

    Tooltip.props().afterShow()
    await delay(1001)
    expect(spy).toBeCalled()
  })
})
