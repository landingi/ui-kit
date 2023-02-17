import '@testing-library/jest-dom'

import { Legend } from '@components/Legend'
import { render } from '@testing-library/react'

import { LegendProps } from './Legend'

const props: LegendProps = {
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
    const newProps: LegendProps = {
      ...props,
      alignment: 'horizontal'
    }
    const { getByTestId } = render(<Legend {...newProps} />)

    const legendContainerNode = getByTestId(legendContainerTestId)

    expect(legendContainerNode).toHaveClass('container--horizontal')
  })

  it('all ranges should be properly rendered', () => {
    const { data } = props

    const { getByText } = render(<Legend {...props} />)

    data.forEach(({ range }) => {
      const rangeNode = getByText(range)

      expect(rangeNode).toBeVisible()
    })
  })

  it('all variants should be properly rendered', () => {
    const { getAllByTestId } = render(<Legend {...props} />)

    const allColorLineNodes = getAllByTestId('colorline')

    expect(allColorLineNodes[0]).toHaveClass(`color-line--success`)

    expect(allColorLineNodes[1]).toHaveClass(`color-line--warning`)

    expect(allColorLineNodes[2]).toHaveClass(`color-line--alert`)
  })
})
