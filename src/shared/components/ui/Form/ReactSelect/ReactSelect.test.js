import React from 'react'
import { render, screen } from '@jestutils'
import ReactSelect from './ReactSelect'

describe('ReactSelect tests', () => {
  const props = {
    name: 'select-name',
    id: 'select-id',
    options: [{ label: 'label-0', value: 'value-0' }],
    value: { 'select-name': 'test-value' }
  }
  it('properly renders with props', () => {
    render(<ReactSelect {...props} />)
  })
  it('has default func props', () => {
    const onChangeResult = ReactSelect.defaultProps.onChange()
    const onBlurResult = ReactSelect.defaultProps.onBlur()

    expect(onChangeResult).toBeFalsy()
    expect(onBlurResult).toBeFalsy()
  })

  it('properly renders with label', () => {
    render(<ReactSelect {...props} i18n={{ label: 'test label' }} />)

    expect(screen.findByText('test label')).toBeTruthy()
  })

  it('properly renders label errow when error exist', () => {
    const props = {
      name: 'select-name',
      id: 'select-id',
      options: [{ label: 'label-0', value: 'value-0' }],
      value: {},
      touched: { 'select-name': true },
      errors: { 'select-name': 'error-name' }
    }

    render(<ReactSelect {...props} />)

    expect(screen.findByText('error-name')).toBeTruthy()
  })
})
