import React from 'react'
import { render } from '@jestutils'
import '@testing-library/jest-dom'
import AccordionSection from '@components/Accordion/AccordionSection'

const props = {
  handleOnClick: jest.fn(),
  label: 'Test Label',
  children: 'I am just children element'
}

describe('<AccordionSection /> mount', () => {
  it('is mounted', () => {
    render(<AccordionSection {...props} />)
  })

  it('calls function passed as handleOnClick prop on click event', () => {
    const { getByTestId } = render(<AccordionSection {...props} />)

    const header = getByTestId('accordion-header')

    header.click()

    expect(props.handleOnClick).toHaveBeenCalled()
  })

  it('has label', () => {
    const { getByTestId } = render(
      <AccordionSection {...props} label='label content' />
    )

    const header = getByTestId('accordion-header')

    expect(header).toHaveTextContent('label content')
  })

  it('has children', () => {
    const { getByTestId } = render(
      <AccordionSection {...props} isOpen={true} />
    )

    const text = getByTestId('accordion-text')

    expect(text).toHaveTextContent('I am just children element')
  })

  it('has label next to the arrow', () => {
    const { getByTestId } = render(
      <AccordionSection
        {...props}
        isOpen={true}
        arrowLabel='I am just an arrow label'
      />
    )

    const arrow = getByTestId('accordion-arrow')

    expect(arrow).toHaveTextContent('I am just an arrow label')
  })

  it('when is open it has icon chevron up', () => {
    const { getByTestId } = render(
      <AccordionSection
        {...props}
        isOpen={true}
        arrowLabel='I am just an arrow label'
      />
    )

    const icon = getByTestId('accordion-icon')

    expect(icon).toHaveClass('editor-icon icon-chevron-up icon--default')
  })

  it('when is not open it has icon chevron down', () => {
    const { getByTestId } = render(
      <AccordionSection
        {...props}
        isOpen={false}
        arrowLabel='I am just an arrow label'
      />
    )

    const icon = getByTestId('accordion-icon')

    expect(icon).toHaveClass('editor-icon icon-chevron-down icon--default')
  })
})
