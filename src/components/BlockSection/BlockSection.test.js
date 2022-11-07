import React from 'react'
import BlockSection from '@components/BlockSection'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

const onClickMock = jest.fn()
const props = {
  title: 'Publish it your way',
  message: 'pusta lista',
  button: 'Click here!',
  url: '/assets/img/empty/domains/domain_empty_section1.png',
  onClick: onClickMock,
  reverse: false
}

const blockSectionComponent = <BlockSection {...props} />

describe('<BlockSection /> mount', () => {
  it('is mounted', () => {
    render(blockSectionComponent)
  })

  it('has not `block-section__panel--reverse` class when reverse is set to false', () => {
    render(blockSectionComponent)

    const panel = screen.getByTestId('panel')

    expect(panel).not.toHaveClass('block-section__panel--reverse')
  })

  it('has `block-section__panel--reverse` class on reverse true', () => {
    render(<BlockSection {...props} reverse />)

    const panel = screen.getByTestId('panel')

    expect(panel).toHaveClass('block-section__panel--reverse')
  })

  it('expect "Publish it your way"', () => {
    render(blockSectionComponent)

    const text = screen.getByText('Publish it your way')

    expect(text).toBeInTheDocument()
  })

  it('onClick callback have been called once', () => {
    render(blockSectionComponent)

    const button = screen.getByText('Click here!')

    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
