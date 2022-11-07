import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Section from '@components/Accordion/Section'

const props = {
  handleOnClick: jest.fn(),
  label: 'Test Label',
  children: 'I am just children element'
}

describe('<Section /> mount', () => {
  it('is mounted', () => {
    render(<Section {...props} />)
  })

  it('calls function passed as handleOnClick prop on click event', () => {
    const { getByTestId } = render(<Section {...props} />)

    const header = getByTestId('accordion-header')

    header.click()

    expect(props.handleOnClick).toHaveBeenCalled()
  })

  it('has label', () => {
    const { getByTestId } = render(<Section {...props} label='label content' />)

    const header = getByTestId('accordion-header')

    expect(header).toHaveTextContent('label content')
  })

  it('has children', () => {
    const { getByTestId } = render(<Section {...props} isOpen={true} />)

    const text = getByTestId('accordion-text')

    expect(text).toHaveTextContent('I am just children element')
  })
})
