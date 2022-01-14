import React, { useRef, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { ChromePicker } from 'react-color'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useClickOutside } from '@helpers/hooks/useClickOutside'
import { styles } from '@helpers/css'
import scss from './ColorPicker.scss'
import Paragraph from '@components/ui/Paragraph'
import Button from '@components/ui/Button'
import { convertColorToObj, rgbTohex, hexRegex } from './helpers'

const cssClass = styles(scss)

/**
 * Color picker - statefull component
 * @param {string} colorValue - color value to display in hex | rgb | rgba eg '#333' | 'rgb(255,21,34) |'rgba(31,22,34,0.5)
 * @param {object} i18n - an object of translations for label, clear button
 * @param {array} favoriteColors - an array of objects favorite colors eg. [{id: '1', color: #333}]
 * @param {function} onColorChange - on color change handler get object with changed color in callback
 * @param {object} colorPanelHandlers - an object of handler functions, functions get value in callback eg.
 * onClickFavoriteHandler - string selected color value in hex format eg. '#213'
 * onClickDeleteHandler - an object with id and color to delete
 * @returns an object of children elements
 */
const ColorPicker = ({
  colorValue,
  i18n,
  favoriteColors,
  onColorChange,
  colorPanelHandlers: { onClickFavoriteHandler, onClickDeleteHandler }
}) => {
  const [isPickerDisplayed, setPickerDisplay] = useState(false)
  const [selectedFavColor, setSelectedFavColor] = useState(null)

  const pickerRef = useRef(null)
  const colorPaletteRef = useRef(null)

  const rgbaColor = convertColorToObj(colorValue)
  const { r, g, b, a } = rgbaColor
  const hasAnyFavoriteColor = favoriteColors.length >= 1

  const handleToggleColorPicker = useCallback(
    () => setPickerDisplay(prevState => !prevState),
    []
  )

  const handleCloseColorPicker = useCallback(() => setPickerDisplay(false), [])

  const removeMarkedFavColor = useCallback(() => setSelectedFavColor(''), [])

  const handleColorChange = color => {
    const {
      rgb: { r, g, b, a = 1 }
    } = color
    const rgbaString = `rgba(${r}, ${g}, ${b}, ${a})`
    onColorChange(rgbaString)
  }

  const handleSelectingFavColor = ({ target }) => {
    const id = target.getAttribute('data-key')
    const { backgroundColor } = target.style
    const hexColor = rgbTohex(backgroundColor)
    const rgbObj = convertColorToObj(backgroundColor)

    setSelectedFavColor({ id, color: hexColor })
    handleColorChange({ rgb: rgbObj })
  }

  const handleAddFavorite = () => {
    const isHexColor = hexRegex.test(colorValue)
    onClickFavoriteHandler(isHexColor ? colorValue : rgbTohex(colorValue))
  }

  const handleDeleteFavColor = () => onClickDeleteHandler(selectedFavColor)

  const handleClear = () => {
    handleColorChange({ rgb: { r: 0, g: 0, b: 0, a: 0 } })
    handleCloseColorPicker()
  }

  useClickOutside(pickerRef, handleCloseColorPicker)
  useClickOutside(colorPaletteRef, removeMarkedFavColor)

  return (
    <div ref={pickerRef} className={cssClass('wrapper')}>
      <div
        data-testid='color-picker-label'
        className={cssClass('color-picker__label')}
        onClick={handleToggleColorPicker}
      >
        <Paragraph color='3' size={16} weight={400} padding='none'>
          {i18n.label}
        </Paragraph>
        <div
          data-testid='color-preview'
          style={{
            backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`
          }}
          className={cssClass(
            'color-picker__color-box',
            'color-picker__color-box--preview'
          )}
        />
      </div>
      {isPickerDisplayed && (
        <div
          data-testid='color-picker'
          className={cssClass('color-picker', {
            'color-picker--has-color-palette': hasAnyFavoriteColor
          })}
        >
          <ChromePicker color={rgbaColor} onChange={handleColorChange} />
          <div className={cssClass('color-picker__switches')}>
            <div className={cssClass('icons-wrapper')}>
              <Button
                size='tiny'
                variant='transparent'
                hasIcon
                onClick={handleClear}
              >
                <FontAwesomeIcon icon='eye-slash' />
                {i18n.clearButton}
              </Button>
              <Button
                size='mini'
                variant='icon'
                onClick={
                  selectedFavColor ? handleDeleteFavColor : handleAddFavorite
                }
              >
                <FontAwesomeIcon
                  icon={selectedFavColor ? 'trash-alt' : 'heart'}
                />
              </Button>
            </div>
            {hasAnyFavoriteColor && (
              <div
                ref={colorPaletteRef}
                className={cssClass('color-picker__color-palette')}
              >
                {favoriteColors.map(({ id, color }) => (
                  <div
                    data-testid={id}
                    data-key={id}
                    key={id}
                    style={{ backgroundColor: `${color}` }}
                    className={cssClass(
                      'color-picker__color-box',
                      'color-picker__color-box--swatch',
                      {
                        'color-picker__color-box--active':
                          id === selectedFavColor?.id
                      }
                    )}
                    onClick={handleSelectingFavColor}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

ColorPicker.displayName = 'Color Picker'

ColorPicker.propTypes = {
  colorValue: PropTypes.string,
  i18n: PropTypes.shape({
    label: PropTypes.string.isRequired,
    clearButton: PropTypes.string.isRequired
  }),
  favoriteColors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ),
  onColorChange: PropTypes.func.isRequired,
  colorPanelHandlers: PropTypes.shape({
    onClickFavoriteHandler: PropTypes.func.isRequired,
    onClickDeleteHandler: PropTypes.func.isRequired
  }).isRequired
}

ColorPicker.defaultProps = {
  colorValue: '#000',
  favoriteColors: []
}

export default ColorPicker
