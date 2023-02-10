import '@testing-library/jest-dom'

import { Loader } from '@components/Loader'
import { render } from '@testing-library/react'

describe('<Loader /> mount', () => {
  it('should be displayed', () => {
    const { getByTestId } = render(<Loader />)

    const loaderNode = getByTestId('loader-default')

    expect(loaderNode).toBeVisible()
  })
})

describe('<Loader /> mount', () => {
  it('should be displayed', () => {
    const { getByTestId } = render(<Loader variant='shapes' />)

    const loaderNode = getByTestId('loader-shapes')

    expect(loaderNode).toBeVisible()
  })
})
