import '@testing-library/jest-dom'

import CustomLink from '@components/CustomLink'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'

describe('<CustomLink/> tests', () => {
  const props = { label: 'Custom link' }

  it('<CustomLink/> mout', () => {
    render(<CustomLink {...props} />)
  })

  it('<CustomLink/> mout & simulate click', () => {
    const { getByTestId } = render(<CustomLink {...props} />)

    const customLink = getByTestId('custom-link')

    fireEvent.click(customLink)
  })
})
