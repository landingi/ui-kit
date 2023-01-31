import '@testing-library/jest-dom'

import { Back } from '@components/Back'
import { fireEvent, render, screen } from '@testing-library/react'

describe('<Back/> mount', () => {
  const props = {
    className: 'class-name',
    content: 'Content',
    url: '/payments/subscription/cancel'
  }

  it('should display proper text', async () => {
    render(<Back {...props} />)

    const tooltipTrigger = screen.getByTestId('tooltip-back')

    fireEvent.mouseOver(tooltipTrigger)

    const tooltip = await screen.findByText('Content')

    expect(tooltip).toBeTruthy()
  })

  it('should have class class-name', () => {
    render(<Back {...props} />)

    const back = screen.getByTestId('back')

    expect(back).toHaveClass('class-name')
  })

  it('button should have class button--icon', () => {
    render(<Back {...props} />)

    const button = screen.getByTestId('button')

    expect(button).toHaveClass('button--icon')
  })

  it('button should have class button--transparent', () => {
    render(<Back {...props} label='Back' />)

    const button = screen.getByTestId('button')

    expect(button).toHaveClass('button--transparent')
  })
})
