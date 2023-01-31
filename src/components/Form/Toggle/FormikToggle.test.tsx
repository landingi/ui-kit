import FormikToggle from '@components/Form/Toggle/FormikToggle'
import { render, screen } from '@testing-library/react'

const props = {
  id: 'jestem-id',
  field: {
    name: 'field-name',
    value: true,
    onChange: jest.fn(),
    onBlur: jest.fn()
  },
  form: {
    errors: {},
    touched: {}
  },
  label: ''
}

describe('<FormikToggle /> mount', () => {
  it('properly renders with props', () => {
    render(<FormikToggle {...props} />)
  })

  it('properly renders with label', () => {
    render(<FormikToggle {...props} label='test label' />)

    expect(screen.findByText('test label')).toBeTruthy()
  })

  it('properly renders error label when error exist', done => {
    const errorsProps = {
      id: 'jestem-id',
      field: {
        name: 'field-name',
        value: true,
        onChange: jest.fn(),
        onBlur: jest.fn()
      },
      form: {
        errors: { 'field-name': 'error-name' },
        touched: { 'field-name': true }
      },
      label: 'test label'
    }

    render(<FormikToggle {...errorsProps} />)

    expect(screen.findByText('error-name')).toBeTruthy()

    done()
  })
})
