import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './Input.scss'
import Label from '@components/ui/Label'
import { FormattedMessage, injectIntl } from 'react-intl'
import MaskedInput from 'react-text-mask'

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
      <div
        className={cssClass(
          scss.input__wrapper,
          elementClasses
        )}
      >
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
            {translate ? (
              <FormattedMessage id={`${label}`} />
            ) : (
              label
            )}
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
   * Field
   */
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  }).isRequired,
  /**
   * Classname, default `input`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
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
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  /**
   * AutoFocus
   */
  autoFocus: PropTypes.bool,
  /**
   * Intl from react-intl
   */
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  /**
   * If label/placeholder should be tranlated by intl
   */
  translate: PropTypes.bool,
  /**
   * Max length of input
   */
  maxLength: PropTypes.number,
  mask: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(RegExp)
    ])
  ),
  /**
   * If it is true underscores will be displayed to represent mask format, for example ____-____-____-____.
   * If it is false no help will be displayed in input.
   */
  guide: PropTypes.bool,
  /**
   * Is focused, focused, keep label by default on top
   */
  focused: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
maskedInput.defaultProps = {
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
  autoFocus: false,
  translate: true,
  maxLength: 524288,
  mask: [],
  guide: false,
  focused: 'false'
}

export default injectIntl(maskedInput)
