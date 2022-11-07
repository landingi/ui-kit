import { fireEvent,render, screen } from '@testing-library/react'
import React from 'react'

import ButtonGroup from './index'

describe('<ButtonGroup />', () => {
  it('renders properly', () => {
    const mockOnChange = jest.fn()

    render(
      <ButtonGroup onChange={mockOnChange} initialValue='test_1'>
        <ButtonGroup.Button id='test_1'>test 1</ButtonGroup.Button>
        <ButtonGroup.Button id='test_2'>test 2</ButtonGroup.Button>
      </ButtonGroup>
    )
  })

  it('call onChange on button clicked', () => {
    const mockOnChange = jest.fn()

    render(
      <ButtonGroup onChange={mockOnChange}>
        <ButtonGroup.Button id='test_1'>test 1</ButtonGroup.Button>
        <ButtonGroup.Button id='test_2'>test 2</ButtonGroup.Button>
      </ButtonGroup>
    )

    const btn = screen.getByText('test 2')

    fireEvent.click(btn)

    expect(mockOnChange).toBeCalledWith('test_2')
  })
})
