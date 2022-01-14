import React from 'react'
import { render, screen } from '@jestutils'
import Select from '@components/ui/Form/Select'
import registerIcons from '@helpers/icons'

registerIcons()

const props = {
  id: 'jestem-id',
  children: 'jestem dziecko',
  field: {
    name: 'field-name'
  },
  form: {
    errors: {},
    touched: {}
  }
}

describe('<Select /> test', () => {
  it('properly renders with props', () => {
    render(<Select {...props} />)
  })

  it('properly renders with label', () => {
    render(<Select {...props} label='test label' />)

    expect(screen.findByText('test label')).toBeTruthy()
  })

  it('properly renders error label when error exist', () => {
    const errorsProps = {
      id: 'jestem-id',
      children: 'jestem dziecko',
      field: {
        name: 'field-name'
      },
      form: {
        errors: { 'field-name': 'error-name' },
        touched: { 'field-name': true }
      }
    }

    render(<Select {...errorsProps} />)

    expect(screen.findByText('test label')).toBeTruthy()
  })
})
