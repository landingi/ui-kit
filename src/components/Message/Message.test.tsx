import { Message } from '@components/Message'
import { render } from '@testing-library/react'
import React from 'react'

describe('<Message/> mount', () => {
  it('should display proper title', () => {
    const title = 'Test title'

    const { getByText } = render(<Message title={title} />)

    const heading = getByText(title)

    expect(heading).toBeTruthy()
  })

  it('should display proper message', () => {
    const messageText = 'simple test message'

    const { getByText } = render(<Message message={messageText} />)

    const message = getByText(messageText)

    expect(message).toBeTruthy()
  })

  it('should display image', () => {
    const { getByRole } = render(
      <Message url='https://testpage.com/image3.png' />
    )

    const image = getByRole('img')

    expect(image).toBeTruthy()
  })

  it('should display image when multimedia position has changed', () => {
    const { getByRole } = render(
      <Message
        url='https://testpage.com/image3.png'
        multimediaPosition='after'
      />
    )

    const image = getByRole('img')

    expect(image).toBeTruthy()
  })
})
