import React from 'react'
import { render } from '@jestutils'
import { fireEvent } from '@testing-library/react'
import CustomLink from '@components/ui/CustomLink'
import '@testing-library/jest-dom'

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
