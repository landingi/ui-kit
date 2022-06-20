import React from 'react'
import { render } from '@jestutils'
import Legend from '@components/Legend'
import '@testing-library/jest-dom'

const props = {
  data: [
    { range: '0 - 20', variant: 'success' },
    { range: '20 - 59', variant: 'warning' },
    { range: '60 - 100', variant: 'alert' }
  ]
}

describe('<Legend/> mount', () => {
  const legendContainerTestId = 'legend-container'

  it('is mounted', () => {
    const { getByTestId } = render(<Legend {...props} />)

    const legendContainerNode = getByTestId(legendContainerTestId)

    expect(legendContainerNode).toBeVisible()
  })

  it('default align should be vertical', () => {
    const { getByTestId } = render(<Legend {...props} />)

    const legendContainerNode = getByTestId(legendContainerTestId)

    expect(legendContainerNode).toHaveClass('container--vertical')
  })

  it('should be rendered with horizontal alignment', () => {
    const newProps = {
      ...props,
      alignment: 'horizontal'
    }
    const { getByTestId } = render(<Legend {...newProps} />)

    const legendContainerNode = getByTestId(legendContainerTestId)

    expect(legendContainerNode).toHaveClass('container--horizontal')
  })

  it('has one success variant', () => {
    expect(
      wrapper.find('span.legend--success').hasClass('legend--success')
    ).toBe(true)
  })

  it('has one warning variant', () => {
    expect(
      wrapper.find('span.legend--warning').hasClass('legend--warning')
    ).toBe(true)
  })

  it('has one alert variant', () => {
    expect(wrapper.find('span.legend--alert').hasClass('legend--alert')).toBe(
      true
    )
  })
})
