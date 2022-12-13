import '@testing-library/jest-dom'

import { Layout } from '@components/Layout'
import { render } from '@testing-library/react'

describe('<Layout /> mount', () => {
  it('should be width full', () => {
    const { getByTestId } = render(<Layout>Test</Layout>)

    const layout = getByTestId('layout-component')

    expect(layout).toHaveClass('layout-width--full')
  })

  it('should be width big', () => {
    const { getByTestId } = render(<Layout width='big'>Test</Layout>)

    const layout = getByTestId('layout-component')

    expect(layout).toHaveClass('layout-width--big')
  })

  it('should be width large', () => {
    const { getByTestId } = render(<Layout width='large'>Test</Layout>)

    const layout = getByTestId('layout-component')

    expect(layout).toHaveClass('layout-width--large')
  })
})
