import '@testing-library/jest-dom'

import { OverflowTooltip } from '@components/OverflowTooltip'
import { fireEvent, render } from '@testing-library/react'

describe('<OverflowTooltip/> mount', () => {
  const props = {
    content: 'foobar',
    length: 100,
    placement: 'left',
    children: 'child'
  }

  it('is mounted and displays whole content', () => {
    const { getByText } = render(
      <OverflowTooltip {...props} placement='left' />
    )

    const contentNode = getByText(props.content)

    expect(contentNode).toBeInTheDocument()
  })

  it('has `overflow-tooltip` class when content text is longest than length property', () => {
    const newProps = {
      ...props,
      length: 10,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, eius!'
    }

    const { getByTestId } = render(
      <OverflowTooltip {...newProps} placement='left' />
    )

    const overflowTooltipNode = getByTestId('overflow-tooltip')

    expect(overflowTooltipNode).toHaveClass('overflow-tooltip')
  })

  it('trims content if exceeds given length and renders <Tooltip/> with whole content', async () => {
    const newProps = {
      length: 3,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, eius!'
    }
    const { getByText, findByText } = render(
      <OverflowTooltip {...newProps} placement='left' />
    )

    const trimedContentNode = getByText('Lor...')

    expect(trimedContentNode).toBeInTheDocument()

    fireEvent.mouseOver(trimedContentNode)

    const wholeContentNode = await findByText(newProps.content)

    expect(wholeContentNode).toBeInTheDocument()
  })

  it('renders only trimmed text if there are no children', () => {
    const newProps = {
      ...props,
      length: 3,
      children: null
    }

    const { getByText, queryByText } = render(
      <OverflowTooltip {...newProps} placement='left' />
    )

    const trimedContentNode = getByText('foo...')

    expect(trimedContentNode).toBeInTheDocument()

    const contentNode = queryByText(props.content)

    expect(contentNode).not.toBeInTheDocument()
  })
})
