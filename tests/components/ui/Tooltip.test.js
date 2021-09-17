import React from 'react'
import { mount } from 'enzyme'
import Tooltip from '@components/ui/Tooltip'
import ReactTooltip from 'react-tooltip'

jest.mock(
  'react-uuid/uuid',
  () => () => '00000000-0000-0000-0000-000000000000'
)

const props = {
  placement: 'bottom',
  children: 'children',
  content: 'Content',
  className: 'custom'
}

const tooltipComponent = (
  <Tooltip {...props}>{props.children}</Tooltip>
)

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
    expect(wrapper.find('span').hasClass('custom')).toBe(
      true
    )
  })

  it('has wrapper component with tip attribute', () => {
    expect(wrapper.find('span').props()['data-tip']).toBe(
      true
    )
  })

  it('has wrapper component with `for` attribute', () => {
    expect(wrapper.find('span').props()['data-for']).toBe(
      '00000000-0000-0000-0000-000000000000'
    )
  })
})
