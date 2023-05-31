import '@testing-library/jest-dom'

import { Feedback } from '@components/Feedback'
import { render, screen } from '@testing-library/react'

const props = {
  i18n: {
    name: 'test',
    content: 'Feedback content.',
    button: 'Share feedback'
  },
  handleFeedback: () => null
}

describe('<Feedback /> mount', () => {
  it('is mounted', () => {
    render(<Feedback {...props} />)

    screen.getByText('Feedback content.')
  })

  it('has `alert-message--info` class', () => {
    render(<Feedback {...props} />)

    const alertComponent = screen.getByTestId('alert')

    expect(alertComponent).toHaveClass('alert-message--info')
  })

  it('has `info` icon', () => {
    render(<Feedback {...props} />)

    const alertComponent = screen.getByTestId('alert')
    const icon = screen.getByTestId('alert-icon')

    expect(icon).toHaveClass('icon-info')
    expect(alertComponent).toHaveClass('alert-message--info')
  })

  it('has custom icon', () => {
    render(<Feedback {...props} customIcon='icon-lightbulb' />)

    const alertComponent = screen.getByTestId('alert')
    const icon = screen.getByTestId('alert-icon')

    expect(icon).toHaveClass('icon-lightbulb')
    expect(alertComponent).toHaveClass('alert-message--info')
  })
})
