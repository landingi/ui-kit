import '@testing-library/jest-dom'

import OverflowTooltip from '@components/OverflowTooltip'
import { render } from '@testing-library/react'
import React from 'react'

describe('<OverflowTooltip/> mount', () => {
  const props = {
    content: 'foobar',
    length: 100,
    placement: 'left',
    children: 'child'
  }

  it('is mounted and displays whole content', () => {
    const { getByText } = render(<OverflowTooltip {...props} />)

    const contentNode = getByText(props.content)

    expect(contentNode).toBeVisible()
  })

  it('has `overflow-tooltip` class when content text is longest than length property', () => {
    const newProps = {
      ...props,
      length: 10,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, eius!'
    }
    const { getByTestId } = render(<OverflowTooltip {...newProps} />)

    const overflowTooltipNode = getByTestId('overflow-tooltip')

    expect(overflowTooltipNode).toHaveClass('overflow-tooltip')
  })

  it('trims content if exceeds given length and renders <Tooltip/> with whole content', () => {
    const newProps = {
      ...props,
      length: 3,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, eius!'
    }
    const { getByText } = render(<OverflowTooltip {...newProps} />)

    const trimedContentNode = getByText('Lor...')

    expect(trimedContentNode).toBeVisible()

    const wholeContentNode = getByText(newProps.content)

    expect(wholeContentNode).toBeInTheDocument()
  })

  it('renders only trimmed text if there are no children', () => {
    const newProps = {
      ...props,
      length: 3,
      children: null
    }

    const { getByText } = render(<OverflowTooltip {...newProps} />)

    const trimedContentNode = getByText('foo...')

    expect(trimedContentNode).toBeVisible()

    const contentNode = getByText(props.content)

    expect(contentNode).not.toBeVisible()
  })
})
