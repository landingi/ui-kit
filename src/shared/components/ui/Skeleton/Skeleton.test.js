import React from 'react'
import { render } from '@jestutils'
import { screen } from '@testing-library/react'
import {
  SkeletonCircle,
  SkeletonLine,
  SkeletonSidebar,
  SkeletonDrawer
} from '@components/ui/Skeleton'
import '@testing-library/jest-dom'

describe('<SkeletonCircle/> mount', () => {
  it('should be displayed', () => {
    render(<SkeletonCircle />)

    const skeletonCircleNode = screen.getByTestId('skeleton-circle')

    expect(skeletonCircleNode).toBeVisible()
  })
})

describe('<SkeletonLine/> mount', () => {
  it('should be displayed', () => {
    render(<SkeletonLine />)

    const skeletonLineNode = screen.getByTestId('skeleton-line')

    expect(skeletonLineNode).toBeVisible()
  })
})

describe('<SkeletonSidebar/> mount', () => {
  it('should be displayed', () => {
    render(<SkeletonSidebar />)

    const skeletonSidebarNode = screen.getByTestId('skeleton-sidebar')

    expect(skeletonSidebarNode).toBeVisible()
  })
})

describe('<SkeletonDrawer /> mount', () => {
  it('should be displayed', () => {
    render(<SkeletonDrawer />)

    const skeletonDrawerNode = screen.getByTestId('skeleton-drawer')

    expect(skeletonDrawerNode).toBeVisible()
  })
})
