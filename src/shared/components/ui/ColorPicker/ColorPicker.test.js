import React from 'react'
import ColorPicker from './ColorPicker'
import { convertColorToObj } from './helpers'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

HTMLCanvasElement.prototype.getContext = () => {}

describe('<ColorPicker/> mount', () => {
  const props = {
    colorValue: '#321efd',
    i18n: {
      label: 'Color',
      clearButton: 'Clear'
    },
    favoriteColors: [
      { id: '1', color: '#321111' },
      { id: '2', color: '#543213' },
      { id: '3', color: '#214321' }
    ],
    onColorChange: jest.fn(),
    colorPanelHandlers: {
      onClickFavoriteHandler: jest.fn(),
      onClickDeleteHandler: jest.fn()
    }
  }

  it('should render proper label', () => {
    const { getByText } = render(<ColorPicker {...props} />)

    const {
      i18n: { label }
    } = props

    const labelNode = getByText(label)

    expect(labelNode).toBeTruthy()
  })

  it('should render preview color box contains color matched with formated colorValue prop', () => {
    const { getByTestId } = render(<ColorPicker {...props} />)

    const { r, g, b, a } = convertColorToObj(props.colorValue)

    const rgbaColorString = `rgba(${r}, ${g}, ${b}, ${a})`

    const colorBoxPreview = getByTestId('color-preview')

    expect(colorBoxPreview).toHaveStyle({
      backgroundColor: `${rgbaColorString}`
    })
  })

  it('should display color picker after clicking on label', () => {
    const { getByTestId } = render(<ColorPicker {...props} />)

    const labelNode = getByTestId('color-picker-label')

    fireEvent.click(labelNode)

    const colorPicker = getByTestId('color-picker')

    expect(colorPicker).toBeInTheDocument()
  })

  it('color picker after opening should displays two buttons', () => {
    const { getByTestId, getAllByRole } = render(<ColorPicker {...props} />)

    const labelNode = getByTestId('color-picker-label')

    fireEvent.click(labelNode)

    const buttons = getAllByRole('button')

    expect(buttons).toHaveLength(2)
  })

  it('color picker should contains pallete of colors which displaying favorite colors passed as prop', () => {
    const { getByTestId } = render(<ColorPicker {...props} />)

    const labelNode = getByTestId('color-picker-label')

    fireEvent.click(labelNode)

    const { favoriteColors } = props

    favoriteColors.map(({ id, color }) => {
      const favoriteColorBox = getByTestId(id)

      expect(favoriteColorBox).toHaveStyle({
        backgroundColor: `${color}`
      })
    })
  })

  it('selected color in pallete should has active class when has been clicked', () => {
    const { getByTestId } = render(<ColorPicker {...props} />)

    const labelNode = getByTestId('color-picker-label')

    fireEvent.click(labelNode)

    const { favoriteColors } = props

    const { id: firstColorID } = favoriteColors[0]

    const firstColorBox = getByTestId(firstColorID)

    fireEvent.click(firstColorBox)

    expect(firstColorBox).toHaveClass('color-picker__color-box--active')
  })

  it('should display heart icon in second Button', () => {
    const { getByTestId, getAllByRole } = render(<ColorPicker {...props} />)

    const labelNode = getByTestId('color-picker-label')

    fireEvent.click(labelNode)

    const secondButton = getAllByRole('button')[1]

    expect(secondButton.firstChild).toHaveClass('fa-heart')
  })

  it('should display trash icon in second Button when one of favorite colors has been clicked', () => {
    const { getByTestId, getAllByRole } = render(<ColorPicker {...props} />)

    const labelNode = getByTestId('color-picker-label')

    fireEvent.click(labelNode)

    const { favoriteColors } = props

    const { id: thirdColorID } = favoriteColors[2]

    const thirdColorBox = getByTestId(thirdColorID)

    fireEvent.click(thirdColorBox)

    const secondButton = getAllByRole('button')[1]

    expect(secondButton.firstChild).toHaveClass('fa-trash-alt')
  })

  it('after clicking second button with heart icon onClickFavoriteHandler callback should be called with selected color', () => {
    const { getByTestId, getAllByRole } = render(<ColorPicker {...props} />)

    const { onClickFavoriteHandler } = props.colorPanelHandlers

    const { colorValue } = props

    const labelNode = getByTestId('color-picker-label')

    fireEvent.click(labelNode)

    const secondButton = getAllByRole('button')[1]

    fireEvent.click(secondButton)

    expect(onClickFavoriteHandler).toBeCalledWith(colorValue)
  })

  it('after clicking button with trash alt icon onDeleteHandler should be called with previously selected favorite color to delete', () => {
    const { getByTestId, getAllByRole } = render(<ColorPicker {...props} />)

    const labelNode = getByTestId('color-picker-label')

    fireEvent.click(labelNode)

    const { onClickDeleteHandler } = props.colorPanelHandlers

    const { favoriteColors } = props

    const choosenFavColor = favoriteColors[2]

    const favColorToDelete = getByTestId(choosenFavColor.id)

    fireEvent.click(favColorToDelete)

    const deleteButton = getAllByRole('button')[1]

    fireEvent.click(deleteButton)

    expect(onClickDeleteHandler).toBeCalledWith(choosenFavColor)
  })

  it('on color change should be called with transparent color after clicking clear button', () => {
    const { getByTestId, getAllByRole } = render(<ColorPicker {...props} />)

    const { onColorChange } = props

    const transparentColor = `rgba(0, 0, 0, 0)`

    const labelNode = getByTestId('color-picker-label')

    fireEvent.click(labelNode)

    const clearButton = getAllByRole('button')[0]

    fireEvent.click(clearButton)

    expect(onColorChange).toBeCalledWith(transparentColor)
  })
})
