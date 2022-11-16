import Message from '@components/Message'
import { render } from '@testing-library/react'
import React from 'react'

describe('<Message/> mount', () => {
  const props = {
    children: 'placeholder',
    title: 'Test title',
    message: 'simple test message',
    titleLevel: 1,
    url: 'https://testpage.com/image3.png'
  }

  it('should display proper title', () => {
    const { getByText } = render(<Message {...props} />)

    const heading = getByText(props.title)

    expect(heading).toBeTruthy()
  })

  it('should display proper message', () => {
    const { getByText } = render(<Message {...props} />)

    const message = getByText(props.message)

    expect(message).toBeTruthy()
  })

  it('should display image', () => {
    const { getByRole } = render(<Message {...props} />)

    const image = getByRole('img')

    expect(image).toBeTruthy()
  })

  it('should display image when multimedia position has changed', () => {
    const messageProps = {
      ...props,
      multimediaPosition: 'after'
    }
    const { getByRole } = render(<Message {...messageProps} />)

    const image = getByRole('img')

    expect(image).toBeTruthy()
  })
})
