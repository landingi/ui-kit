import '@testing-library/jest-dom'

import Tooltip from '@components/Tooltip'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'

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
