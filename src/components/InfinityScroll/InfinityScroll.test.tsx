import '@testing-library/jest-dom'

import { InfinityScroll } from '@components/InfinityScroll'
import { render } from '@testing-library/react'

const mockIntersectionObserver = jest.fn()
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
})
global.IntersectionObserver = mockIntersectionObserver

describe('<InfinityScroll/> tests', () => {
  it('renders properly', () => {
    render(<InfinityScroll loadMore={() => {}}>children</InfinityScroll>)
  })

  it('has no loader on end', () => {
    const { getByTestId } = render(
      <InfinityScroll isLastPage loadMore={() => null}>
        children
      </InfinityScroll>
    )

    expect(getByTestId('loader-wrapper')).toHaveClass('loading-hide')
  })
})
