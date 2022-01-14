import React from 'react'
import { render, screen } from '@jestutils'
import CheckboxGroup from './CheckboxGroup'

describe('CheCheckboxGroupckbox tests', () => {
  const props = {
    name: 'field-name',
    children: 'children',
    errors: {},
    touched: {}
  }
  it('Proper render with props', () => {
    render(<CheckboxGroup {...props} />)
  })
  it('Proper render with label', () => {
    render(<CheckboxGroup {...props} label='test label' />)

    expect(screen.findByRole('label')).toBeTruthy()
  })
  it('Render error when is touched', () => {
    const touchedProps = {
      name: 'field-name',
      children: 'children',
      errors: {},
      touched: {
        ['field-name']: 'error-name'
      }
    }

    render(<CheckboxGroup {...touchedProps} label='test label' />)

    expect(screen.findByText('error-name')).toBeTruthy()
  })
})
