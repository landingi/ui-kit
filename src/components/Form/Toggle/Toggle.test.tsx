import Toggle from '@components/Form/Toggle/Toggle'
import { render, screen } from '@testing-library/react'
import React from 'react'

const props = {
  id: 'jestem-id',
  name: 'field-name',
  onChange: jest.fn(),
  checked: false,
  label: 'label',
  onBlur: () => null
}

describe('<Toggle /> tests', () => {
  it('properly renders with props', () => {
    render(<Toggle {...props} />)
  })

  it('properly renders with label', () => {
    render(<Toggle {...props} label='test label' />)

    expect(screen.findByText('test label')).toBeTruthy()
  })

  it('has properly classes when checked is enabled', done => {
    const checkedProps = {
      id: 'jestem-id',
      name: 'field-name',
      onChange: jest.fn(),
      checked: true,
      label: 'label',
      onBlur: () => null
    }

    const { container } = render(<Toggle {...checkedProps} />)

    expect(
      container.getElementsByClassName('toggle--checked-disabled')
    ).toBeTruthy()

    done()
  })
})
