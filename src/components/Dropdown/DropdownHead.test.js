import '@testing-library/jest-dom'

import DropdownHead from '@components/Dropdown/Head'
import { render , screen } from '@testing-library/react'
import React from 'react'

const props = {
  children: 'some children'
}

const dropdownComponent = <DropdownHead {...props} />

describe('<DropdownHead/> mount', () => {
  it('should displayed children and contains default class', () => {
    render(dropdownComponent)

    const { children } = props

    const dropdownHeadNode = screen.queryByText(children)

    expect(dropdownHeadNode).toBeVisible()

    expect(dropdownHeadNode).toHaveClass('dropdown__head')
  })
})
