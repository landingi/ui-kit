import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Back from '@components/Back'
import Tooltip from '@components/Tooltip'

describe('<Back/> mount', () => {
  const props = {
    className: 'class-name',
    content: <Tooltip>Content</Tooltip>,
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
})
