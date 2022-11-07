import React from 'react'
import { render } from '@testing-library/react'
import InfinityScroll from '@components/InfinityScroll'
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
    const { getByTestId } = render(
      <InfinityScroll isLastPage>children</InfinityScroll>
    )

    expect(getByTestId('loader-wrapper')).toHaveClass('loading-hide')
  })
})
