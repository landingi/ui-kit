import React from 'react'
import { mount } from 'enzyme'
import Instruction from '@components/ui/Instruction'

const props = {
  data: [
    {
      content: <div key={1}>Treść 1</div>
    },
    {
      content: <div key={2}>Treść 2</div>
    }
  ]
}

const instructionComponent = <Instruction {...props} />

describe('<Instruction /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(instructionComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Expect "1Treść1" text', () => {
    expect(wrapper.find('div.instruction__step').at(0).text()).toEqual(
      '1Treść 1'
    )
  })

  it('Expect "2Treść2" text', () => {
    expect(wrapper.find('div.instruction__step').at(1).text()).toEqual(
      '2Treść 2'
    )
  })
})
