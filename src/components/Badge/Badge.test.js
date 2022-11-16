import '@testing-library/jest-dom'

import Badge from '@components/Badge'
import { render } from '@testing-library/react'
import React from 'react'

const initialProps = {
  children: 'Mocked badge'
}

describe('<Badge/> mount', () => {
  it('is mounted', () => {
    const { getByTestId } = render(<Badge {...initialProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toBeVisible()
  })

  it('should be rendered alert badge', () => {
    const newProps = {
      ...initialProps,
      type: 'alert'
    }
    const { getByTestId } = render(<Badge {...newProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--alert')
  })

  it('should be rendered info badge', () => {
    const newProps = {
      ...initialProps,
      type: 'info'
    }
    const { getByTestId } = render(<Badge {...newProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--info')
  })

  it('should be rendered success badge', () => {
    const newProps = {
      ...initialProps,
      type: 'success'
    }
    const { getByTestId } = render(<Badge {...newProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--success')
  })

  it('should be rendered pending badge', () => {
    const newProps = {
      ...initialProps,
      type: 'pending'
    }
    const { getByTestId } = render(<Badge {...newProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--pending')
  })

  it('should be rendered warning badge', () => {
    const newProps = {
      ...initialProps,
      type: 'warning'
    }
    const { getByTestId } = render(<Badge {...newProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--warning')
  })

  it('should be rendered accent-1 badge', () => {
    const newProps = {
      ...initialProps,
      type: 'accent-1'
    }
    const { getByTestId } = render(<Badge {...newProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--accent-1')
  })

  it('should be rendered accent-2 badge', () => {
    const newProps = {
      ...initialProps,
      type: 'accent-2'
    }
    const { getByTestId } = render(<Badge {...newProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--accent-2')
  })

  it('when is indicator should have class badge--indicator', () => {
    const newProps = {
      ...initialProps,
      isIndicator: true
    }
    const { getByTestId } = render(<Badge {...newProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--indicator')
  })

  it('when the tooltip prop has not value the children span should not have badge-tooltip class', () => {
    const { getByText } = render(<Badge {...initialProps} />)

    const childSpanNode = getByText('Mocked badge')

    expect(childSpanNode).not.toHaveClass('badge__tooltip')
  })

  it('when the tooltip prop has value the children span should have badge-tooltip class', () => {
    const newProps = {
      ...initialProps,
      tooltip: 'Mocked tooltip'
    }
    const { getByText } = render(<Badge {...newProps} />)

    const childSpanNode = getByText('Mocked badge')

    expect(childSpanNode).toHaveClass('badge__tooltip')
  })

  it('Tooltip badge should displays proper value', () => {
    const newProps = {
      ...initialProps,
      tooltip: 'Random text to display'
    }
    const { tooltip } = newProps

    const { getByText } = render(<Badge {...newProps} />)

    const tooltipNode = getByText(tooltip)

    expect(tooltipNode).toHaveTextContent(tooltip)
  })
})
