import React from 'react'
import ColorPicker from './ColorPicker'
import Button from '@components/ui/Button'
import registerIcons from '@helpers/icons'
import { convertColorToObj } from './helpers'
import { fireEvent, screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

registerIcons()
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
    // const { getByTestId } = render(<ColorPicker {...props} />)
    // const labelNode = getByTestId('color-picker-label')
    // fireEvent.click(labelNode)
    // screen.debug()
  })

  it('should display trash-alt icon in second Button when one of favorite colors has been clicked', () => {
    wrapper.find('div.color-picker__label').simulate('click')

    const { id } = wrapper.prop('favoriteColors')[0]

    wrapper.find(`[data-key="${id}"]`).simulate('click')

    expect(
      wrapper.find(Button).at(1).find('FontAwesomeIcon').prop('icon')
    ).toEqual('trash-alt')
  })

  it('after clicking button with heart icon onClickFavoriteHandler callback should be called with selected color', () => {
    const { onClickFavoriteHandler } = props.colorPanelHandlers
    wrapper.find('div.color-picker__label').simulate('click')

    wrapper.find(Button).at(1).simulate('click')

    expect(onClickFavoriteHandler).toBeCalledWith(props.colorValue)
  })

  it('after clicking button with trash alt icon onDeleteHandler should be called with previously selected favorite color to delete', () => {
    const { onClickDeleteHandler } = props.colorPanelHandlers

    wrapper.find('div.color-picker__label').simulate('click')

    const favColor = wrapper.prop('favoriteColors')[0]

    wrapper.find(`[data-key="${favColor.id}"]`).simulate('click')

    wrapper.find(Button).at(1).simulate('click')

    expect(onClickDeleteHandler).toBeCalledWith(favColor)
  })

  it('after changing color onColorChange callback should be called with new changed color', async () => {
    const { onColorChange } = props
    const newColor = { hex: '#321412', rgb: { a: 1 } }

    wrapper.find('div.color-picker__label').simulate('click')

    await wrapper.find('Chrome').invoke('onChange')(newColor)

    expect(onColorChange).toBeCalledWith('rgba(50, 20, 18, 1)')
  })

  it('onColorChange should return default black color with alpha 0 when clear button has been clicked', () => {
    const { onColorChange } = props
    wrapper.find('div.color-picker__label').simulate('click')

    wrapper.find(Button).at(0).simulate('click')

    expect(onColorChange).toBeCalledWith('rgba(0, 0, 0, 0)')
  })
})
