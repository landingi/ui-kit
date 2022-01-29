import React from 'react'
import RadioGroup from '@components/ui/Form/Radio/Group'
import { render, screen } from '@jestutils'
import '@testing-library/jest-dom'

const props = {
  name: 'nazwa-pola',
  children: 'jestem dzieckiem radio',
  errors: {},
  touched: {}
}

describe('<RadioGroup /> mount', () => {
  it('is mounted', () => {
    render(<RadioGroup {...props} />)
  })

  it('has label rendered when prop label is set', () => {
    render(<RadioGroup {...props} label='label' />)

    const label = screen.getByText('label')
    expect(label).toBeInTheDocument()
  })

  it('has error displayed when touched is set', () => {
    const touchedProps = {
      name: 'field-name',
      children: 'children',
      errors: { ['field-name']: 'error' },
      touched: {
        ['field-name']: 'error-name'
      }
    }
    render(<RadioGroup {...touchedProps} />)

    const error = screen.getByText('error')

    expect(error).toBeInTheDocument()
  })
})
