import { Indicator } from '@components/Indicator'
import { render } from '@testing-library/react'

describe('<Indicator/> mount', () => {
  it('is mounted', () => {
    render(<Indicator>Indicator</Indicator>)
  })
})
