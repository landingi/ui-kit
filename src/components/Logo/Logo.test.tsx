import '@testing-library/jest-dom'

import { LongLogo, ShortLogo } from '@components/Logo'
import { render } from '@testing-library/react'

describe('<ShortLogo/> mount', () => {
  it('is mounted', () => {
    const { container } = render(<ShortLogo />)

    expect(container.firstChild).toHaveClass('logo Logo__logo__animated')
  })
})

describe('<LongLogo /> mount', () => {
  it('is mounted', () => {
    const { container } = render(<LongLogo />)

    expect(container.firstChild).toHaveClass('logo Logo__logo__animated')
  })
})
