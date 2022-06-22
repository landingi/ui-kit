import React from 'react'
import { render } from '@jestutils'
import Image from '@components/Image'
import '@testing-library/jest-dom'

const initialProps = {
  src: 'http://www.laningi.com',
  alt: 'Landing Page Builder for non-programmers',
  size: 100
}

describe('<Image/> mount', () => {
  it('Image should be rendered with proper attributes', () => {
    const { getByRole } = render(<Image {...initialProps} />)

    const { src, alt, size } = initialProps

    const imageNode = getByRole('img')

    expect(imageNode).toBeVisible()

    expect(imageNode).toHaveAttribute('src', src)

    expect(imageNode).toHaveAttribute('alt', alt)

    expect(imageNode).toHaveAttribute('width', size.toString())
  })

  it('Image should contains --auto and --small modifier classes', () => {
    const newProps = {
      ...initialProps,
      small: true,
      auto: true
    }
    const { getByRole } = render(<Image {...newProps} />)

    const imageNode = getByRole('img')

    const modifiers = ['small', 'auto']

    modifiers.forEach(modifier => {
      expect(imageNode).toHaveClass(`image--${modifier}`)
    })
  })
})
