import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import GalleryImage from '@components/GalleryImage'

const props = {
  src: 'https://ca.slack-edge.com/T07M95VD2-U0BFVANVB-fd337e02e237-512'
}

describe('<GalleryImage/> tests', () => {
  it('renders properly', () => {
    render(<GalleryImage {...props} />)
  })

  it('call default onClick and onDoubleClick function', () => {
    const { getByTestId } = render(<GalleryImage {...props} />)

    const image = getByTestId('gallery-image')

    fireEvent.click(image)
    fireEvent.doubleClick(image)
  })
})
