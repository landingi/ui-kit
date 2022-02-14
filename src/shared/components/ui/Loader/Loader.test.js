import React from 'react'
import Loader from '@components/ui/Loader'
import { render } from '@jestutils'
import '@testing-library/jest-dom'

describe('<Loader/> mount', () => {
  it('should be displayed', () => {
    const { getByTestId } = render(<Loader />)

    const loaderNode = getByTestId('loader')

    expect(loaderNode).toBeVisible()
  })

  it('should contain custom passed class', () => {
    const customClass = 'loader-list--green'

    const { getByTestId } = render(<Loader className={customClass} />)

    const loaderNode = getByTestId('loader')

    expect(loaderNode).toHaveClass(customClass)
  })
})
