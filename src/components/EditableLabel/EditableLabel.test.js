import '@testing-library/jest-dom'

import { fireEvent,render, screen } from '@testing-library/react'
import React from 'react'

import EditableLabel from './EditableLabel'

describe('<EditableLabel /> tests', () => {
  it('renders properly', () => {
    render(<EditableLabel initialName='test name' />)
  })

  it('input focus on button click', () => {
    render(<EditableLabel initialName='test name' />)

    const button = screen.getByTestId('editable-label-button')

    fireEvent.click(button)

    const input = screen.getByTestId('editable-label-input')

    expect(input).toBeInTheDocument()
  })

  it('the label should be clickable', () => {
    render(<EditableLabel initialName='test name' isClickable />)

    const label = screen.getByTestId('editable-label')

    fireEvent.click(label)

    const input = screen.getByTestId('editable-label-input')

    expect(input).toBeInTheDocument()
  })

  it('input blur on outside click', () => {
    render(<EditableLabel initialName='test name' />)

    const button = screen.getByTestId('editable-label-button')

    fireEvent.click(button)

    const input = screen.getByTestId('editable-label-input')

    fireEvent.mouseDown(document)
    expect(input).not.toBeInTheDocument()
  })

  it('call callback function on accept by button', () => {
    const mockOnChange = jest.fn()

    render(<EditableLabel initialName='test name' onChange={mockOnChange} />)

    const button = screen.getByTestId('editable-label-button')

    // start edit
    fireEvent.click(button)

    const input = screen.getByTestId('editable-label-input')

    // change name
    fireEvent.change(input, { target: { value: 'new name' } })
    // accept edit
    fireEvent.click(button)

    expect(mockOnChange).toBeCalledWith('new name')
  })

  it('call callback function on accept by enter', () => {
    const mockOnChange = jest.fn()

    render(<EditableLabel initialName='test name' onChange={mockOnChange} />)

    const button = screen.getByTestId('editable-label-button')

    // start edit
    fireEvent.click(button)

    const input = screen.getByTestId('editable-label-input')

    // change name
    fireEvent.change(input, { target: { value: 'new name' } })
    // accept edit
    fireEvent.keyDown(input, { key: 'Enter', code: 13 })

    expect(mockOnChange).toBeCalledWith('new name')
  })

  it('cancel edit when new title is empty', () => {
    const mockOnChange = jest.fn()

    render(<EditableLabel initialName='test name' onChange={mockOnChange} />)

    const button = screen.getByTestId('editable-label-button')

    // start edit
    fireEvent.click(button)

    const input = screen.getByTestId('editable-label-input')

    // change name
    fireEvent.change(input, { target: { value: '' } })
    // accept edit
    fireEvent.click(button)

    expect(mockOnChange).not.toBeCalled()
  })

  it('cancel edit when new title the same as the initial name', () => {
    const mockOnChange = jest.fn()

    render(<EditableLabel initialName='test name' onChange={mockOnChange} />)

    const button = screen.getByTestId('editable-label-button')

    // start edit
    fireEvent.click(button)

    const input = screen.getByTestId('editable-label-input')

    // change name
    fireEvent.change(input, { target: { value: 'test name' } })
    // accept edit
    fireEvent.click(button)

    expect(mockOnChange).not.toBeCalled()
  })

  it('button should have a mini size', () => {
    render(<EditableLabel initialName='test name' size='small' />)

    const button = screen.getByTestId('editable-label-button')

    expect(button).toHaveClass('button--mini')
  })

  it('button should have a medium size', () => {
    render(<EditableLabel initialName='test name' size='big' />)

    const button = screen.getByTestId('editable-label-button')

    expect(button).toHaveClass('button--medium')
  })

  it('should have a spinner instead of a button', () => {
    render(<EditableLabel initialName='test name' isLoading />)

    const spinner = screen.getByTestId('spinner')

    expect(spinner).toBeInTheDocument()
  })

  it('should have a spinner instead of a button', () => {
    const { rerender } = render(<EditableLabel initialName='test name' />)

    const button = screen.getByTestId('editable-label-button')

    expect(button).toBeInTheDocument()

    rerender(<EditableLabel initialName='test name' isDisabled />)

    expect(button).not.toBeInTheDocument()
  })
})
