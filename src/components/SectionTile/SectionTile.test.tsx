import '@testing-library/jest-dom'

import { SectionTile } from '@components/SectionTile'
import { fireEvent, render } from '@testing-library/react'

const Component = ({ isActive = false }: { isActive?: boolean }) => (
  <SectionTile isActive={isActive}>CHILDREN</SectionTile>
)

describe('<SectionTile/> tests', () => {
  it('renders properly', () => {
    const { getByText } = render(<Component isActive />)
    const children = getByText('CHILDREN')

    expect(children).toBeInTheDocument()
  })

  it('call default onClick', () => {
    const { getByTestId } = render(<Component />)
    const pointArea = getByTestId('box-outline')

    fireEvent.click(pointArea)
  })

  it('call default onDoubleClick', () => {
    const { getByTestId } = render(<Component />)
    const pointArea = getByTestId('box-outline')

    fireEvent.doubleClick(pointArea)
  })
})
