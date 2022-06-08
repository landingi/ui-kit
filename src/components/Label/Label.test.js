import React from 'react'
import { render } from '@jestutils'
import { screen } from '@testing-library/react'
import Label from '@components/Label'
import '@testing-library/jest-dom'

describe('<Label/> mount', () => {
  const props = {
    children: 'random text',
    id: 'my-label',
    isToggle: false,
    toggle: false
  }

  const { children: childText } = props

  it('should be displayed in normal variant with provided custom class', () => {
    const newProps = {
      ...props,
      className: 'label--green',
      id: 'my-label'
    }

    const { className } = newProps

    render(<Label {...newProps} />)

    const label = screen.getByText(childText)

    expect(label).toHaveClass(className)

    expect(label).toHaveClass('label--normal')

    expect(label).toBeVisible()
  })

  it('should be inactive when toggling is enabled', () => {
    const newProps = {
      ...props,
      id: 'my-label',
      isToggle: true
    }

    render(<Label {...newProps} />)

    const label = screen.getByText(childText)

    expect(label).toHaveClass('label--inactive')

    expect(label).toBeVisible()
  })

  it('should be active when toggling is enabled and toggle props equal true', () => {
    const newProps = {
      ...props,
      id: 'my-label',
      isToggle: true,
      toggle: true
    }

    const { id } = newProps

    render(<Label {...newProps} />)

    const label = screen.getByText(childText)

    expect(label).toHaveClass('label--active')

    expect(label).toHaveAttribute('id', id)

    expect(label).toBeVisible()
  })
})
