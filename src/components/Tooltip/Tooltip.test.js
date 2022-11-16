import '@testing-library/jest-dom'

import Tooltip from '@components/Tooltip'
import { fireEvent,render } from '@testing-library/react'
import PropTypes from 'prop-types'
import React from 'react'

jest.mock('react-uuid/uuid', () => () => '00000000-0000-0000-0000-000000000000')

const props = {
  placement: 'bottom',
  content: 'Tooltip content'
}

const Component = ({ showOnClick }) => (
  <Tooltip showOnClick={showOnClick} {...props}>
    test-children
  </Tooltip>
)

Component.propTypes = {
  showOnClick: PropTypes.bool
}

Component.defaultProps = {
  showOnClick: false
}

describe('<Tooltip/> test', () => {
  it('renders properly', () => {
    render(<Component />)
  })

  it('shows tooltip on hover', async () => {
    const { getByText, findByText } = render(<Component />)

    const children = getByText('test-children')

    fireEvent.mouseEnter(children)

    const tooltip = await findByText('Tooltip content')

    expect(tooltip).toBeInTheDocument()
  })

  it('shows tooltip on click', async () => {
    const { getByText, findByText } = render(<Component showOnClick />)

    const children = getByText('test-children')

    fireEvent.click(children)

    const tooltip = await findByText('Tooltip content')

    expect(tooltip).toBeInTheDocument()
  })
})
