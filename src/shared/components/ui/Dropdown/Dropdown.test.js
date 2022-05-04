import React from 'react'
import { render } from '@jestutils'
import { screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Dropdown from '@components/ui/Dropdown'

const renderDropdown = ({ children, ...props }) =>
  render(<Dropdown {...props}>{children}</Dropdown>)

describe('<Dropdown/> mount', () => {
  const props = {
    label: 'Custom dropdown',
    children: 'Dropdown child',
    icon: 'icon-elipssis',
    inModalName: 'Modal with dropdown'
  }

  it('should be displayed with passed label ', () => {
    const { label } = props

    renderDropdown(props)

    const dropdownLabelNode = screen.queryByText(label)

    expect(dropdownLabelNode).toBeVisible()
  })

  it('Dropdown children should be displayed on click', () => {
    const { children } = props

    renderDropdown(props)

    expect(screen.queryByText(children)).not.toBeInTheDocument()

    const dropdown = screen.queryByTestId('trigger-dropdown')

    fireEvent.click(dropdown)

    expect(screen.queryByText(children)).toBeInTheDocument()
  })

  it(`Dropdown shouldn't open if opening is disabled `, () => {
    const newProps = {
      ...props,
      isOpenDisabled: true,
      size: 'fixed'
    }

    const { children } = newProps

    renderDropdown(newProps)

    expect(screen.queryByText(children)).not.toBeInTheDocument()

    const dropdown = screen.queryByTestId('trigger-dropdown')

    fireEvent.click(dropdown)

    expect(screen.queryByText(children)).not.toBeInTheDocument()
  })

  it('when button prop is passed should be rendered with button', () => {
    const newProps = {
      ...props,
      button: true,
      linkComponent: children => <span>{children}</span>,
      size: 'huge'
    }

    renderDropdown(newProps)

    const dropdown = screen.queryByTestId('trigger-dropdown')

    expect(dropdown).toBeVisible()
  })

  it('when tooltip is passed should be rendered with tooltip variant', () => {
    const newProps = {
      ...props,
      tooltip: 'Random tooltip',
      tooltipPlacement: 'right'
    }

    renderDropdown(newProps)

    const dropdown = screen.queryByTestId('trigger-dropdown')

    expect(dropdown).toBeVisible()
  })

  it('should be rendered with custom label and dots arrowType', () => {
    const customLabelText = 'custom label'

    const newProps = {
      ...props,
      custom: <span>{customLabelText}</span>,
      arrowType: 'dots'
    }

    renderDropdown(newProps)

    const customLabel = screen.queryByText(customLabelText)

    expect(customLabel).toBeVisible()
  })
})
