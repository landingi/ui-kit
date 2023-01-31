import '@testing-library/jest-dom'

import { Tooltip } from '@components/Tooltip'
import { fireEvent, render } from '@testing-library/react'

const props = {
  content: 'Tooltip content'
}

describe('<Tooltip/> test', () => {
  it('renders properly', () => {
    render(<Tooltip {...props}>children</Tooltip>)
  })

  it('shows tooltip on hover', async () => {
    const { getByText, findByText } = render(
      <Tooltip {...props}>test-children</Tooltip>
    )

    const children = getByText('test-children')

    fireEvent.mouseOver(children)

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
