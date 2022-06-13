import React from 'react'
import { mount } from 'enzyme'
import Accordion from '@components/Accordion2'
import AccordionItem from '@components/Accordion2/Item/AccordionItem'

const propsAccordion = {
  data: [
    {
      title: 'modal.domains.faq.title.1',
      content: 'modal.domains.faq.content.1'
    },
    {
      title: 'modal.domains.faq.title.2',
      content: 'modal.domains.faq.content.2'
    }
  ]
}

const propsAccordionItem = {
  number: 1,
  title: 'modal.domains.faq.title.1',
  content: <p>test</p>
}

const accordionComponent = <Accordion {...propsAccordion} />
const accordionItemComponent = <AccordionItem {...propsAccordionItem} />

describe('<Accordion /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(accordionComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
})

describe('<AccordionItem /> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(accordionItemComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has `accordion__item` class', () => {
    expect(wrapper.hasClass('accordion__item')).toBe(true)
  })

  it('has `accordion__item--content-close` class', () => {
    expect(wrapper.hasClass('accordion__item--content-close')).toBe(false)
  })

  it('has `accordion__item--content-open` class', () => {
    wrapper.find('.accordion__item--title').simulate('click')

    wrapper.update()

    expect(wrapper.hasClass('accordion__item--content-open')).toBe(false)
  })
})
