import React from 'react'
import { mountWithIntl } from '@jestutils'
import registerIcons from '@helpers/icons'
import ColorPicker from './ColorPicker'
import Button from '@components/ui/Button'
import { act } from 'react-dom/test-utils'
import { convertColorToObj } from './helpers'

registerIcons()
HTMLCanvasElement.prototype.getContext = () => {}

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

const ColorPickerComponent = <ColorPicker {...props} />

describe('<ColorPicker/> mount', () => {
  let wrapper

  beforeEach(() => {
    act(() => {
      wrapper = mountWithIntl(ColorPickerComponent)
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should render label', () => {
    expect(wrapper.find('div.color-picker__label').exists()).toBe(true)
  })

  it('should render preview color box contains color matched with formated colorValue prop', () => {
    const { r, g, b, a } = convertColorToObj(wrapper.prop('colorValue'))
    const rgbaColorString = `rgba(${r}, ${g}, ${b}, ${a})`

    expect(
      wrapper.find('div.color-picker__color-box--preview').prop('style')
    ).toHaveProperty('backgroundColor', rgbaColorString)
  })

  it('should display color picker after clicking on label', () => {
    wrapper.find('div.color-picker__label').simulate('click')

    expect(wrapper.find('div.color-picker').exists()).toBe(true)
  })

  it('color picker should contains two buttons', () => {
    wrapper.find('div.color-picker__label').simulate('click')

    expect(wrapper.find(Button).length).toBe(2)
  })

  it('color picker should contains color matched with colorValue prop', () => {
    wrapper.find('div.color-picker__label').simulate('click')

    expect(wrapper.find('Chrome').prop('hex')).toEqual(
      wrapper.prop('colorValue')
    )
  })

  it('color picker should contains pallete of colors which displaying favorite colors passed as prop', () => {
    wrapper.find('div.color-picker__label').simulate('click')

    const favoriteColors = wrapper.prop('favoriteColors')

    favoriteColors.map(({ id, color }) => {
      expect(wrapper.find(`[data-key="${id}"]`).prop('style')).toHaveProperty(
        'backgroundColor',
        color
      )
    })
  })

  it('selected color in pallete should has active class when has been clicked', () => {
    wrapper.find('div.color-picker__label').simulate('click')

    const { id } = wrapper.prop('favoriteColors')[0]

    wrapper.find(`[data-key="${id}"]`).simulate('click')

    expect(
      wrapper
        .find(`[data-key="${id}"]`)
        .hasClass('color-picker__color-box--active')
    ).toBe(true)
  })

  it('should display heart icon in second Button', () => {
    wrapper.find('div.color-picker__label').simulate('click')

    expect(
      wrapper.find(Button).at(1).find('FontAwesomeIcon').prop('icon')
    ).toEqual('heart')
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
