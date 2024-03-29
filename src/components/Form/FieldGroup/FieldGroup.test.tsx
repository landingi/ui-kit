import { render, screen } from '@testing-library/react'

import { FieldGroup } from './FieldGroup'

describe('FieldGroup tests', () => {
  const props = {
    name: 'field-name',
    children: 'children',
    errors: {},
    touched: {}
  }
  it('properly render with props', () => {
    render(<FieldGroup {...props} />)
  })
  it('properly render with label', () => {
    render(<FieldGroup {...props} label='test label' />)

    expect(screen.findByRole('label')).toBeTruthy()
  })
  it('properly render error when is touched', () => {
    const touchedProps = {
      name: 'field-name',
      children: 'children',
      errors: {
        'field-name': 'error-name'
      },
      touched: {
        'field-name': true
      }
    }

    expect(screen.queryByText('error-name')).toBeFalsy()

    render(<FieldGroup {...touchedProps} label='test label' />)

    expect(screen.findByText('error-name')).toBeTruthy()
  })
})
