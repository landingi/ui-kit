import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Accordion from '@components/Accordion2'
import AccordionItem from '@components/Accordion2/Item/AccordionItem'

const propsAccordion = {
  data: [
    {
      title: 'Accordion title 1',
      description: 'Accordion description 1',
      content: 'Accordion content 1'
    },
    {
      title: 'Accordion title 2',
      description: 'Accordion description 2',
      content: 'Accordion content 2'
    }
  ]
}

const propsAccordionItem = {
  number: 1,
  title: 'Accordion title',
  content: <p>Accordion content</p>
}

describe('<Accordion /> mount', () => {
  it('is mounted', () => {
    render(<Accordion {...propsAccordion} />)
  })
})

describe('<AccordionItem /> mount', () => {
  it('is mounted', () => {
    render(<AccordionItem {...propsAccordionItem} />)
  })

  it('has `accordion__item` class', () => {
    const { getByTestId } = render(<AccordionItem {...propsAccordionItem} />)

    const accordionItem = getByTestId('accordion-item')

    expect(accordionItem).toHaveClass('accordion__item')
  })

  it('has `accordion__item--content-close` class', () => {
    const { getByTestId } = render(<AccordionItem {...propsAccordionItem} />)

    const accordionItemTitle = getByTestId('accordion-item-title')
    const accordionItemContent = getByTestId('accordion-item-content')

    accordionItemTitle.click()

    expect(accordionItemContent).toHaveClass('accordion__item--content-close')
  })

  it('has `accordion__item--content-open` class', () => {
    const { getByTestId } = render(<AccordionItem {...propsAccordionItem} />)

    const accordionItemContent = getByTestId('accordion-item-content')

    expect(accordionItemContent).toHaveClass('accordion__item--content-open')
  })

  it('has padding `none', () => {
    const { getByTestId } = render(
      <AccordionItem
        {...propsAccordionItem}
        description='Accordion description'
      />
    )

    const accordionItemTitle = getByTestId('accordion-item-title')
    const accordionItemDescription = getByTestId('accordion-item-description')
    const accordionItemContent = getByTestId('accordion-item-content')

    expect(accordionItemTitle).toHaveClass(
      'accordion__item--title-padding-none'
    )
    expect(accordionItemDescription).toHaveClass(
      'accordion__item--description-padding-none'
    )
    expect(accordionItemContent).toHaveClass(
      'accordion__item--content-padding-none'
    )
  })

  it('has padding `small', () => {
    const { getByTestId } = render(
      <AccordionItem
        {...propsAccordionItem}
        description='Accordion description'
        padding='small'
      />
    )

    const accordionItemTitle = getByTestId('accordion-item-title')
    const accordionItemDescription = getByTestId('accordion-item-description')
    const accordionItemContent = getByTestId('accordion-item-content')

    expect(accordionItemTitle).toHaveClass(
      'accordion__item--title-padding-small'
    )
    expect(accordionItemDescription).toHaveClass(
      'accordion__item--description-padding-small'
    )
    expect(accordionItemContent).toHaveClass(
      'accordion__item--content-padding-small'
    )
  })

  it('has padding `medium', () => {
    const { getByTestId } = render(
      <AccordionItem
        {...propsAccordionItem}
        description='Accordion description'
        padding='medium'
      />
    )

    const accordionItemTitle = getByTestId('accordion-item-title')
    const accordionItemDescription = getByTestId('accordion-item-description')
    const accordionItemContent = getByTestId('accordion-item-content')

    expect(accordionItemTitle).toHaveClass(
      'accordion__item--title-padding-medium'
    )
    expect(accordionItemDescription).toHaveClass(
      'accordion__item--description-padding-medium'
    )
    expect(accordionItemContent).toHaveClass(
      'accordion__item--content-padding-medium'
    )
  })

  it('has `isBox` style', () => {
    const { getByTestId } = render(
      <AccordionItem {...propsAccordionItem} isBox />
    )

    const accordionItem = getByTestId('accordion-item')

    expect(accordionItem).toHaveClass('accordion__item--box')
  })
})
