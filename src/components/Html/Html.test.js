import React from 'react'
import Html from '@components/Html'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

const htmlCode = `lorem <b onclick="alert('onclick');">ipsum</b>`

describe('<Html/> mount', () => {
  it('is mounted and texts display properly', () => {
    const { getByText } = render(<Html value={htmlCode} />)

    const firstText = getByText('lorem')

    const secondText = getByText('ipsum')

    expect(firstText).toHaveTextContent('lorem')

    expect(secondText).toHaveTextContent('ipsum')
  })
})
