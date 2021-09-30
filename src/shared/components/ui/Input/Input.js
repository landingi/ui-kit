import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage, injectIntl } from 'react-intl'
import { styles } from '@helpers/css'
import Label from '@components/ui/Label'
import PropTypes from 'prop-types'
import React from 'react'
import Tooltip from '@components/ui/Tooltip'
import scss from './Input.scss'
const cssClass = styles(scss),
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
  input = ({
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
      }),
      valueProp = {
        ...(controlledValue
          ? {
              value
            }
          : {
              defaultValue: value
            })
      }

    return (
      <div
        className={cssClass(
          scss.input__wrapper,
          elementClasses
        )}
      >
        <input
          className={cssClass(className)}
          id={name}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={
            translate
              ? intl.formatMessage({
                  id: `${placeholder || label}`
                })
              : label
          }
          type={type}
          {...valueProp}
          autoFocus={autoFocus}
          disabled={!disabled ? undefined : disabled}
          maxLength={maxLength}
          min={min}
          readOnly={disabled ? readonly : undefined}
          required={required}
        />

        <span className={cssClass('highlight')} />

        <span className={cssClass('bar')} />

        {label && (
          <Label className={scss.input__label} id={name}>
            {translate ? (
              <FormattedMessage id={`${label}`} />
            ) : (
              label
            )}
          </Label>
        )}

        {tooltip && (
          <Tooltip
            className='input__tooltip'
            content={tooltip}
            placement='bottom'
          >
            <FontAwesomeIcon
              color='#2550AA'
              icon='exclamation-circle'
            />
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
   * AutoFocus
   */
  autoFocus: PropTypes.bool,

  /**
   * Classname, default `input`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),

  /**
   * Deafult value
   */
  controlledValue: PropTypes.bool,

  /**
   * Diabled
   */
  disabled: PropTypes.bool,

  /**
   * Is focused, focused, keep label by default on top
   */
  focused: PropTypes.string,

  /**
   * Intl from react-intl
   */
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,

  /**
   * Label
   */
  label: PropTypes.string,

  /**
   * Max length of input
   */
  maxLength: PropTypes.number,

  min: PropTypes.number,

  /**
   * Name
   */
  name: PropTypes.string,

  /**
   * Gets called on blur
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onBlur: PropTypes.func,

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
   * Placeholder
   */
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * Readonly
   */
  readonly: PropTypes.bool,

  /**
   * Required
   */
  required: PropTypes.bool,

  /**
   * Tooltip content
   */
  tooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object)
  ]),

  /**
   * If label/placeholder should be tranlated by intl
   */
  translate: PropTypes.bool,

  /**
   * Type, default `text`, `number`, `textarea`
   */
  type: PropTypes.string,

  /**
   * Value
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

/**
 * The default properties.
 * @type {Object}
 */
input.defaultProps = {
  autoFocus: false,
  className: 'input',
  controlledValue: false,
  disabled: false,
  focused: 'false',
  label: null,
  maxLength: 524288,
  name: null,
  onBlur: () => null,
  onChange: () => null,
  onKeyDown: () => null,
  placeholder: '',
  readonly: false,
  required: true,
  tooltip: '',
  translate: true,
  type: 'text',
  value: null
}

export default injectIntl(input)
