import React from 'react'
import { render, screen } from '@jestutils'
import CheckboxGroup from './CheckboxGroup'

describe('CheckboxGroup tests', () => {
  const props = {
    name: 'field-name',
    children: 'children',
    errors: {},
    touched: {}
  }
  it('properly render with props', () => {
    render(<CheckboxGroup {...props} />)
  })
  it('properly render with label', () => {
    render(<CheckboxGroup {...props} label='test label' />)

    expect(screen.findByRole('label')).toBeTruthy()
  })
  it('properly render error when is touched', () => {
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
