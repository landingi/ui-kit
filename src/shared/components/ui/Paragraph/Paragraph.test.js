import React from 'react'
import { render } from '@testing-library/react'
import Paragraph from '@components/ui/Paragraph'
import '@testing-library/jest-dom'

describe('<Paragraph/> mount', () => {
  const props = {
    children: 'placeholder',
    className: ['class-name', 'class-paragraph']
  }

  it('should display proper children', () => {
    const { getByText } = render(<Paragraph {...props} />)

    const paragraph = getByText('placeholder')

    expect(paragraph).toBeTruthy()
  })

  it('should has multiple class class names', () => {
    const { getByTestId } = render(<Paragraph {...props} />)

    const paragraph = getByTestId('paragraph')

    expect(paragraph).toHaveClass('class-name', 'class-paragraph')
  })

  it('should have class class name', () => {
    props.className = 'class-name'
    const { getByTestId } = render(<Paragraph {...props} />)

    const paragraph = getByTestId('paragraph')

    expect(paragraph).toHaveClass('class-name')
  })
})
