import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './Input.scss'
import Label from '@components/ui/Label'
import Tooltip from '@components/ui/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const cssClass = styles(scss)

/**
 * Input - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: input
 * @param {function} props.onChange - click handler
 * @param {function} props.onKeyDown - key down handler
 * @param {function} props.onBlur - blur handler
 * @param {string} props.type - type
 * @param {string|object} props.placeholder - placeholder
 * @param {string} props.name - name
 * @param {boolean} props.disabled - disabled
 * @param {boolean} props.readonly - readonly
 * @param {object} props.i18n - label
 * @param {bool} props.autoFocus - autoFocus
 * @param {string} props.focused - focused, keep label by default on top
 * @param {number} props.maxLength - max length of input
 * @param {string|object} props.tooltip - tooltip
 * @param {string|number} props.value - value
 * @param {number} props.min - min value when type is number
 * @param {number} props.max - max value when type is number
 * @param {bool} props.required - required
 * @param {string} props.background - Color of background `white, transparent', default: white
 * @param {boolean} props.hideArrows - Hide arrows inc/dec value from type number input
 * @return {object} An object of children element
 */
const input = ({
  className,
  onChange,
  onKeyDown,
  onBlur,
  type,
  name,
  disabled,
  readonly,
  i18n,
  value,
  autoFocus,
  maxLength,
  required,
  focused,
  tooltip,
  min,
  max,
  background,
  hideArrows
}) => {
  const elementClasses = cssClass({
    'input__wrapper--focused': focused === 'true'
  })

  const inputClasses = cssClass({
    'input--transparent': background === 'transparent',
    'input--hidden-arrows': hideArrows
  })

  return (
    <div className={cssClass(scss.input__wrapper, elementClasses)}>
      <input
        className={cssClass(className, inputClasses)}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type={type}
        placeholder={i18n.label || i18n.placeholder}
        name={name}
        id={name}
        defaultValue={value}
        readOnly={disabled ? readonly : undefined}
        disabled={!disabled ? undefined : disabled}
        autoFocus={autoFocus}
        maxLength={maxLength}
        required={required}
        {...(type === 'number' ? { min, max } : {})}
      />
      <span className={cssClass('highlight')} />

      <span className={cssClass('bar')} />

      {i18n?.label && (
        <Label id={name} className={scss.input__label}>
          {i18n.label }
        </Label>
      )}

      {tooltip && (
        <Tooltip
          className='input__tooltip'
          placement='bottom'
          content={tooltip}
        >
          <FontAwesomeIcon color='#2550AA' icon='exclamation-circle' />
        </Tooltip>
      )}
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
input.displayName = 'Input'

/**
 * The properties.
 * @type {Object}
 */
input.propTypes = {
  /**
   * ClassName, default `input`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * Gets called when the user clicks on Input
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onChange: PropTypes.func,
  /**
   * Gets called when the user clicks on Input
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onKeyDown: PropTypes.func,
  /**
   * Gets called on blur
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onBlur: PropTypes.func,
  /**
   * Type, default `text`, `number`, `textarea`
   */
  type: PropTypes.string,
  /**
   * Name
   */
  name: PropTypes.string,
  /**
   * Disabled
   */
  disabled: PropTypes.bool,
  /**
   * Readonly
   */
  readonly: PropTypes.bool,
  /**
   * Value
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * autoFocus
   */
  autoFocus: PropTypes.bool,
  /**
   * max length of input
   */
  maxLength: PropTypes.number,
  /**
   * required
   */
  required: PropTypes.bool,
  /**
   * is focused, focused, keep label by default on top
   */
  focused: PropTypes.string,
  /**
   * min value of number in input
   */
  min: PropTypes.number,
  /**
   * max value of number in input
   */
  max: PropTypes.number,
  /**
   * Tooltip content
   */
  tooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object)
  ]),
  /**
   * Input background
   */
  background: PropTypes.oneOf(['white', 'transparent']),
  /**
   * hide arrows inc/dec in input type number
   */
  hideArrows: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
input.defaultProps = {
  className: 'input',
  type: 'text',
  name: null,
  disabled: false,
  readonly: false,
  value: null,
  autoFocus: false,
  translate: true,
  maxLength: 524288,
  required: true,
  hideArrows: false,
  focused: 'false',
  tooltip: '',
  background: 'white',
  i18n: {
    label: null,
    placeholder: null
  },
  onChange: () => null,
  onKeyDown: () => null,
  onBlur: () => null,
}

export default input
