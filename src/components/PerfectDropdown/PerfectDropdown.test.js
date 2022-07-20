import '@testing-library/jest-dom'
import React from 'react'
import { render } from '@jestutils'
import PerfectDropdown from '@components/PerfectDropdown'

describe('<PerfectDropdown/> tests', () => {
  it('renders properly', () => {
    render(<PerfectDropdown> content </PerfectDropdown>)
  })
})
