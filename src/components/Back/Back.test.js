import '@testing-library/jest-dom'

import Back from '@components/Back'
import { render } from '@testing-library/react'
import React from 'react'

describe('<Back/> mount', () => {
  const props = {
    className: 'class-name',
    content: 'Content',
    url: '/payments/subscription/cancel'
  }

  it('should display proper text', () => {
    const { getByText } = render(<Back {...props} />)

    const tooltip = getByText('Content')

    expect(tooltip).toBeTruthy()
  })

  it('should have class class-name', () => {
    const { getByTestId } = render(<Back {...props} />)

    const back = getByTestId('back')

    expect(back).toHaveClass('class-name')
  })

  it('button should have class button--icon', () => {
    const { getByTestId } = render(<Back {...props} />)

    const button = getByTestId('button')

    expect(button).toHaveClass('button--icon')
  })

  it('button should have class button--transparent', () => {
    const { getByTestId } = render(<Back {...props} label='Back' />)

    const button = getByTestId('button')

    expect(button).toHaveClass('button--transparent')
  })
})
