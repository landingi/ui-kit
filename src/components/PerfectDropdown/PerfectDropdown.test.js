import '@testing-library/jest-dom'

import PerfectDropdown from '@components/PerfectDropdown'
import { render } from '@testing-library/react'
import React from 'react'

describe('<PerfectDropdown/> tests', () => {
  it('renders properly', () => {
    render(<PerfectDropdown> content </PerfectDropdown>)
  })
})
