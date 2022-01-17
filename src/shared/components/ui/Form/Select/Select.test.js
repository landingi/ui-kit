import React from 'react'
import { render, screen } from '@jestutils'
import Select from '@components/ui/Form/Select'
import registerIcons from '@helpers/icons'
import { act } from 'react-dom/test-utils'

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

  it('properly renders with props', async done => {
    render(<Select {...props} />)

    done()
  })

  it('properly renders with label', async done => {
    render(<Select {...props} label='test label' />)

    expect(screen.findByText('test label')).toBeTruthy()

    done()
  })
})
