import React from 'react'
import { render } from '@jestutils'
import InfinityScroll from '@components/ui/InfinityScroll'
import '@testing-library/jest-dom'

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
    const { getByTestId, debug } = render(
      <InfinityScroll isLastPage>children</InfinityScroll>
    )

    debug()

    expect(getByTestId('loader-wrapper')).toHaveClass('loading-hide')
  })
})
