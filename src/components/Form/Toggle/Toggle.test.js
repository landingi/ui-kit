import React from 'react'
import { render, screen } from '@jestutils'
import Toggle from '@components/Form/Toggle/Toggle'

const props = {
  id: 'jestem-id',
  name: 'field-name',
  onChange: jest.fn(),
  checked: false
}

describe('<Toggle /> tests', () => {
  it('properly renders with props', () => {
    render(<Toggle {...props} />)
  })

  it('default prop `onBlur` should be undefined', async done => {
    const result = Toggle.defaultProps.onBlur()

    expect(result).toBe(null)

    done()
  })

  it('properly renders with label', () => {
    render(<Toggle {...props} label='test label' />)

    expect(screen.findByText('test label')).toBeTruthy()
  })

  it('has properly classes when checked is enabled', async done => {
    const checkedProps = {
      id: 'jestem-id',
      name: 'field-name',
      onChange: jest.fn(),
      checked: true
    }

    const { container } = render(<Toggle {...checkedProps} />)

    expect(
      container.getElementsByClassName('toggle--checked-disabled')
    ).toBeTruthy()

    done()
  })
})
