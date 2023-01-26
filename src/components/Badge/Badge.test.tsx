import '@testing-library/jest-dom'

import { Badge } from '@components/Badge'
import { render, screen } from '@testing-library/react'

const initialProps = {
  children: 'Mocked badge'
}

describe('<Badge/> mount', () => {
  it('is mounted', () => {
    render(<Badge {...initialProps} />)

    const badgeNode = screen.getByTestId('badge')

    expect(badgeNode).toBeVisible()
  })

  it('should be rendered alert badge', () => {
    const newProps = {
      ...initialProps,
      type: 'alert' as const
    }

    render(<Badge {...newProps} />)

    const badgeNode = screen.getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--alert')
  })

  it('should be rendered info badge', () => {
    const newProps = {
      ...initialProps,
      type: 'info' as const
    }
    render(<Badge {...newProps} />)

    const badgeNode = screen.getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--info')
  })

  it('should be rendered success badge', () => {
    const newProps = {
      ...initialProps,
      type: 'success' as const
    }
    render(<Badge {...newProps} />)

    const badgeNode = screen.getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--success')
  })

  it('should be rendered pending badge', () => {
    const newProps = {
      ...initialProps,
      type: 'pending' as const
    }
    render(<Badge {...newProps} />)

    const badgeNode = screen.getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--pending')
  })

  it('should be rendered warning badge', () => {
    const newProps = {
      ...initialProps,
      type: 'warning' as const
    }
    render(<Badge {...newProps} />)

    const badgeNode = screen.getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--warning')
  })

  it('should be rendered accent-1 badge', () => {
    const newProps = {
      ...initialProps,
      type: 'accent-1' as const
    }
    render(<Badge {...newProps} />)

    const badgeNode = screen.getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--accent-1')
  })

  it('should be rendered accent-2 badge', () => {
    const newProps = {
      ...initialProps,
      type: 'accent-2' as const
    }
    render(<Badge {...newProps} />)

    const badgeNode = screen.getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--accent-2')
  })

  it('when is indicator should have class badge--indicator', () => {
    const newProps = {
      ...initialProps,
      isIndicator: true
    }
    render(<Badge {...newProps} />)

    const badgeNode = screen.getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--indicator')
  })

  it('when the tooltip prop has not value the children span should not have badge-tooltip class', () => {
    render(<Badge {...initialProps} />)

    const childSpanNode = screen.getByText('Mocked badge')

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
})
