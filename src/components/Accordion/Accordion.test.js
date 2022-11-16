import '@testing-library/jest-dom'

import Accordion from '@components/Accordion'
import { render } from '@testing-library/react'
import React from 'react'

const accordionComponent = (
  <Accordion>
    <div label='label 1'>children 1</div>
    <div label='label 2'>children 2</div>
    <div label='label 3'>children 3</div>
  </Accordion>
)

describe('<Accordion/> mount', () => {
  it('is mounted', () => {
    render(accordionComponent)
  })

  it('open firt section', () => {
    const { queryAllByTestId } = render(accordionComponent)

    const header = queryAllByTestId('accordion-header')

    header[0].click()
  })
})
