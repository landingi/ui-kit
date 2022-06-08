import React from 'react'
import BoxOutline from '@components/ui/BoxOutline'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('<BoxOutline/> mount', () => {
  const props = {
    children: <div>child</div>,
    className: 'box-custom-class',
    isSelected: true,
    onClickHandler: jest.fn(),
    onDoubleClickHandler: jest.fn()
  }

  it('should render <BoxOutline/>', () => {
    const { getByTestId } = render(<BoxOutline {...props} />)

    const boxOutlineNode = getByTestId('box-outline')

    expect(boxOutlineNode).toBeTruthy()
  })

  it('should have custom class name passed as prop', () => {
    const { getByTestId } = render(<BoxOutline {...props} />)

    const boxOutlineNode = getByTestId('box-outline')

    expect(boxOutlineNode).toHaveClass(props.className)
  })

  it('should render child', () => {
    const { getByText } = render(<BoxOutline {...props} />)

    const child = getByText('child')

    expect(child).toBeTruthy()
  })

  it('should call onClickHandler when box was clicked', () => {
    const { getByTestId } = render(<BoxOutline {...props} />)

    const { onClickHandler } = props

    const boxOutlineNode = getByTestId('box-outline')

    fireEvent.click(boxOutlineNode)

    expect(onClickHandler).toBeCalledTimes(1)
  })

  it('should call onDoubleClickHandler when box was clicked 2 times', () => {
    const { getByTestId } = render(<BoxOutline {...props} />)

    const { onDoubleClickHandler } = props

    const boxOutlineNode = getByTestId('box-outline')

    fireEvent.doubleClick(boxOutlineNode)

    expect(onDoubleClickHandler).toBeCalledTimes(1)
  })
})
