import React from 'react'
import Loader from '@components/Loader'
import { render } from '@jestutils'
import '@testing-library/jest-dom'

describe('<Loader /> mount', () => {
  it('should be displayed', () => {
    const { getByTestId } = render(<Loader />)

    const loaderNode = getByTestId('loader-default')

    expect(loaderNode).toBeVisible()
  })
})

describe('<Loader /> mount', () => {
  const props = {
    variant: 'shapes'
  }
  it('should be displayed', () => {
    const { getByTestId } = render(<Loader {...props} />)

    const loaderNode = getByTestId('loader-shapes')

    expect(loaderNode).toBeVisible()
  })
})
