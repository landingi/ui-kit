import '@testing-library/jest-dom'

import Loader from '@components/Loader'
import { render } from '@testing-library/react'
import React from 'react'

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
