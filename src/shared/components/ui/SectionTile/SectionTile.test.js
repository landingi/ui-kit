import '@testing-library/jest-dom'
import React from 'react'
import PropTypes from 'prop-types'
import { render, fireEvent } from '@jestutils'
import SectionTile from '@components/ui/SectionTile'

const Component = ({ isActive }) => (
  <SectionTile isActive={isActive}>CHILDREN</SectionTile>
)

Component.propTypes = {
  isActive: PropTypes.bool
}

Component.defaultProps = {
  isActive: false
}

describe('<SectionTile/> tests', () => {
  it('renders properly', () => {
    const { getByText } = render(<Component isActive />)
    const children = getByText('CHILDREN')

    expect(children).toBeInTheDocument()
  })

  it('call default onClick', () => {
    const { getByTestId } = render(<Component />)
    const pointArea = getByTestId('box-outline')

    fireEvent.click(pointArea)
  })

  it('call default onDoubleClick', () => {
    const { getByTestId } = render(<Component />)
    const pointArea = getByTestId('box-outline')

    fireEvent.doubleClick(pointArea)
  })
})
