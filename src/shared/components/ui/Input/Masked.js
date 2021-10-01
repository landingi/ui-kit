import { FormattedMessage, injectIntl } from 'react-intl'
import { styles } from '@helpers/css'
import Label from '@components/ui/Label'
import MaskedInput from 'react-text-mask'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Input.scss'

const cssClass = styles(scss),
  /**
   * Masked Input - stateless presentational component
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
   * @param {string} props.mask - mask applied to input
   * @param {number} props.maxLength - max length of input
   * @param {bool} props.translate - true if placeholder/label is an id for translation
   * @param {object} props.field - formik field
   * @param {object} props.intl - intl
   * @param {bool}  props.guide - if it is true underscores will be displayed to represent mask format
   * @param {string} props.focused - focused, keep label by default on top
   * @param {strin|number} props.value - value
   * @return {object} An object of children element
   */

  maskedInput = ({
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
    mask,
    field,
    guide,
    focused
  }) => {
    const elementClasses = cssClass({
      'input__wrapper--focused': focused === 'true'
    })

    return (
      <div className={cssClass(scss.input__wrapper, elementClasses)}>
        <MaskedInput
          autoFocus={autoFocus}
          className={cssClass(className)}
          defaultValue={value}
          disabled={!disabled ? undefined : disabled}
          field={field}
          focused={focused}
          guide={guide}
          id={name}
          mask={mask}
          maxLength={maxLength}
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
          readOnly={disabled ? readonly : undefined}
          required
          type={type}
        />

        <span className={cssClass('highlight')} />

        <span className={cssClass('bar')} />

        {label && (
          <Label className={scss.input__label} id={name}>
            {translate ? <FormattedMessage id={`${label}`} /> : label}
          </Label>
        )}
      </div>
    )
  }

/**
 * Display name
 * @type {string}
 */
maskedInput.displayName = 'Masked Input'

/**
 * The properties.
 * @type {Object}
 */
maskedInput.propTypes = {
  /**
   * AutoFocus
   */
  autoFocus: PropTypes.bool,

  /**
   * Classname, default `input`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /**
   * Diabled
   */
  disabled: PropTypes.bool,

  /**
   * Field
   */
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired,

  /**
   * Is focused, focused, keep label by default on top
   */
  focused: PropTypes.string,

  /**
   * If it is true underscores will be displayed to represent mask format, for example ____-____-____-____.
   * If it is false no help will be displayed in input.
   */
  guide: PropTypes.bool,

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

  mask: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)])
  ),

  /**
   * Max length of input
   */
  maxLength: PropTypes.number,

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
   * Gets called when the user clicks on MaskedInput
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onChange: PropTypes.func,

  /**
   * Gets called when the user clicks on MaskedInput
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onKeyDown: PropTypes.func,

  /**
   * Placeholder
   */
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  /**
   * Readonly
   */
  readonly: PropTypes.bool,

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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

/**
 * The default properties.
 * @type {Object}
 */
maskedInput.defaultProps = {
  autoFocus: false,
  className: 'input',
  disabled: false,
  focused: 'false',
  guide: false,
  label: null,
  mask: [],
  maxLength: 524288,
  name: null,
  onBlur: () => null,
  onChange: () => null,
  onKeyDown: () => null,
  placeholder: '',
  readonly: false,
  translate: true,
  type: 'text',
  value: null
}

export default injectIntl(maskedInput)
