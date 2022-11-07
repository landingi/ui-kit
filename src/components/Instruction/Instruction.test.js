import React from 'react'
import { render } from '@testing-library/react'
import Instruction from '@components/Instruction'

const props = {
  data: [
    { content: 'Step 1' },
    { content: 'Step 2' },
    { content: 'Step 3' },
    { content: 'Step 4' }
  ]
}

describe('<Instruction /> mount', () => {
  it('is mounted', () => {
    render(<Instruction {...props} />)
  })
})
