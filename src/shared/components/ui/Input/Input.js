import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Input.scss'
import Label from 'shared/components/ui/Label'
import { FormattedMessage, injectIntl } from 'react-intl'
import Tooltip from 'shared/components/ui/Tooltip'
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
 * @param {string} props.label - label
 * @param {bool} props.autoFocus - autoFocus
 * @param {string} props.focused - focused, keep label by default on top
 * @param {object} props.intl - intl
 * @param {bool} props.translate - true if placeholder/label is an id for translation
 * @param {number} props.maxLength - max length of input
 * @param {string|object} props.tooltip - tooltip
 * @param {strin|number} props.value - value
 * @param {bool} props.required - required
 * @param {bool} props.controlledValue - enable to control input value manually
 * @return {object} An object of children element
 */
const input = ({
  className,
  onChange,
  onKeyDown,
  onBlur,
  type,
  placeholder,
  name,
  disabled,
  readonly,
  label,
  value,
  autoFocus,
  intl,
  translate,
  maxLength,
  required,
  focused,
  tooltip,
  min,
  controlledValue
}) => {
  const elementClasses = cssClass({
    'input__wrapper--focused': focused === 'true'
  })

  const valueProp = {
    ...(controlledValue ? {
      value
    } : {
      defaultValue: value
    })
  }

  return (
    <div className={cssClass(scss.input__wrapper, elementClasses)}>
      <input
        className={cssClass(className)}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type={type}
        placeholder={
          translate
            ? intl.formatMessage({ id: `${placeholder || label}` })
            : label
        }
        name={name}
        id={name}
        {...valueProp}
        readOnly={disabled ? readonly : undefined}
        disabled={!disabled ? undefined : disabled}
        autoFocus={autoFocus}
        maxLength={maxLength}
        required={required}
        min={min}
      />

      <span className={cssClass('highlight')} />

      <span className={cssClass('bar')} />

      {label && (
        <Label
          id={name}
          className={scss.input__label}>
          {translate ? <FormattedMessage id={`${label}`} /> : label}
        </Label>
      )}

      {tooltip && (
        <Tooltip
          className="input__tooltip"
          placement="bottom"
          content={tooltip}>
          <FontAwesomeIcon
            color="#2550AA"
            icon="exclamation-circle" />
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
   * Classname, default `input`
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
   * Placeholder
   */
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * Name
   */
  name: PropTypes.string,
  /**
   * Diabled
   */
  disabled: PropTypes.bool,
  /**
   * Readonly
   */
  readonly: PropTypes.bool,
  /**
   * Label
   */
  label: PropTypes.string,
  /**
   * Value
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Deafult value
   */
  controlledValue: PropTypes.bool,
  /**
   * autoFocus
   */
  autoFocus: PropTypes.bool,
  /**
   * Intl from react-intl
   */
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  /**
   * if label/placeholder should be tranlated by intl
   */
  translate: PropTypes.bool,
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
   * Tooltip content
   */
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]),
  min: PropTypes.number
}

/**
 * The default properties.
 * @type {Object}
 */
input.defaultProps = {
  className: 'input',
  onChange: () => null,
  onKeyDown: () => null,
  onBlur: () => null,
  type: 'text',
  placeholder: '',
  name: null,
  disabled: false,
  readonly: false,
  label: null,
  value: null,
  controlledValue: false,
  autoFocus: false,
  translate: true,
  maxLength: 524288,
  required: true,
  focused: 'false',
  tooltip: ''
}

export default injectIntl(input)
