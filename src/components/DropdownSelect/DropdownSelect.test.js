import React from 'react'
import DropdownSelect from '@components/DropdownSelect'
import { render, screen, fireEvent } from '@jestutils'
import '@testing-library/jest-dom'

const props = {
  children: 'children',
  options: [
    {
      label: 'jestem label 123',
      value: 'jestem value'
    }
  ]
}

const dropdownComponent = <DropdownSelect {...props} />

describe('<DropdownSelect /> mount', () => {
  it('is mounted', () => {
    render(dropdownComponent)
  })

  it('should have a label', () => {
    const propsWithLabel = { ...props, label: 'Jestem labelem' }

    render(<DropdownSelect {...propsWithLabel} />)

    const label = screen.getByText('Jestem labelem')

    expect(label).toBeInTheDocument()
  })

  it('on `click` state `isOpen` set to true', () => {
    render(dropdownComponent)

    const dropdownTrigger = screen.getByTestId('trigger-dropdown')

    let option = screen.queryByText('jestem label 123')

    expect(option).not.toBeInTheDocument()

    fireEvent.click(dropdownTrigger)

    option = screen.getByText('jestem label 123')

    expect(option).toBeInTheDocument()
  })

  it('has `dropdown__wrapper` class', () => {
    render(dropdownComponent)

    const dropdownTrigger = screen.getByTestId('trigger-dropdown')

    expect(dropdownTrigger).toHaveClass('dropdown__wrapper')
  })
})
