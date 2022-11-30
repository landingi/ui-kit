import '@testing-library/jest-dom'

import Tooltip from '@components/Tooltip'
import { fireEvent, render } from '@testing-library/react'
import PropTypes from 'prop-types'
import React from 'react'

import { TooltipProps } from './Tooltip'

jest.mock('react-uuid/uuid', () => () => '00000000-0000-0000-0000-000000000000')

const props = {
  content: 'Tooltip content'
}

describe('<Tooltip/> test', () => {
  it('renders properly', () => {
    render(
      <Tooltip showOnClick={false} {...props}>
        children
      </Tooltip>
    )
  })

  it('shows tooltip on hover', async () => {
    const { getByText, findByText } = render(
      <Tooltip {...props}>test-children</Tooltip>
    )

    const children = getByText('test-children')

    fireEvent.mouseEnter(children)

    const tooltip = await findByText('Tooltip content')

    expect(tooltip).toBeInTheDocument()
  })

  it('shows tooltip on click', async () => {
    const { getByText, findByText } = render(
      <Tooltip showOnClick {...props}>
        test-children
      </Tooltip>
    )

    const children = getByText('test-children')

    fireEvent.click(children)

    const tooltip = await findByText('Tooltip content')

    expect(tooltip).toBeInTheDocument()
  })
})
