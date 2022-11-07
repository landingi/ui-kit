import React from 'react'
import Select from '@components/Select'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('<Select/> mount', () => {
  const props = {
    id: 'country',
    name: 'country'
  }

  it('is mounted', () => {
    render(<Select data={[]} {...props} />)
  })

  it('renders option given as data props', () => {
    render(<Select data={[{ label: 'Polska', value: 'PL' }]} {...props} />)

    expect(screen.getByText('Polska')).toBeInTheDocument()
  })

  it('renders option given as data props', () => {
    render(
      <Select
        data={[
          { label: 'Polska', value: 'PL' },
          { label: 'Niemcy', value: 'DE' },
          { label: 'Francja', value: 'FR' }
        ]}
        {...props}
      />
    )

    const options = screen.getAllByRole('option')

    expect(options).toHaveLength(3)
  })
})
