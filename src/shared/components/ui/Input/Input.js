import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import Label from '@components/ui/Label'
import Tooltip from '@components/ui/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import scss from './Input.scss'
const cssClass = styles(scss)

/**
 * Input - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: input
 * @param {function} props.onChange - click handler
 * @param {function} props.onKeyDown - key down handler
 * @param {function} props.onBlur - blur handler
 * @param {string} props.type - type
 * @param {string} props.name - name
 * @param {boolean} props.disabled - disabled
 * @param {boolean} props.readonly - readonly
 * @param {object} props.i18n - object of translation
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
const Input = ({
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
        value={value}
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
          {i18n.label}
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

Input.displayName = 'Input'

Input.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoFocus: PropTypes.bool,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  focused: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  tooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object)
  ]),
  background: PropTypes.oneOf(['white', 'transparent']),
  hideArrows: PropTypes.bool
}

Input.defaultProps = {
  className: 'input',
  type: 'text',
  focused: 'false',
  tooltip: '',
  background: 'white',
  maxLength: 524288,
  i18n: {
    label: null,
    placeholder: null
  },
  name: null,
  value: null,
  disabled: false,
  readonly: false,
  autoFocus: false,
  translate: true,
  required: true,
  hideArrows: false,
  onChange: () => null,
  onKeyDown: () => null,
  onBlur: () => null
}

export default Input
