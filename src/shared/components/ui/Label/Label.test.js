import React from 'react'
import Label from '@components/ui/Label'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('<Label/> mount', () => {
  const props = {
    children: 'label'
  }

  it('should render <Label/>', () => {
    const { getByText } = render(<Label {...props} />)

    const label = getByText('label')

    expect(label).toBeTruthy()
  })
})
