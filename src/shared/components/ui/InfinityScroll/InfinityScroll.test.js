import React from 'react'
import { render } from '@jestutils'
import InfinityScroll from '@components/ui/InfinityScroll'
import registerIcons from '@helpers/icons'

registerIcons()

global.IntersectionObserver = class IntersectionObserver {
  constructor(func) {
    this.func = func
  }

  observe(element) {
    this.func([{ isIntersecting: true, target: element }])
  }

  disconnect() {
    return null
  }

  unobserve() {
    return null
  }
}

describe('<InfinityScroll/> tests', () => {
  it('renders properly', () => {
    render(<InfinityScroll>children</InfinityScroll>)
  })

  it('has no loader on end', () => {
    const { getByTestId } = render(
      <InfinityScroll isLastPage>children</InfinityScroll>
    )

    expect(getByTestId('loader-wrapper')).toHaveClass('loading-hide')
  })
})
