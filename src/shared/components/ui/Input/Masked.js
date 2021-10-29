import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './Input.scss'
import Label from '@components/ui/Label'
import MaskedInput from 'react-text-mask'

const cssClass = styles(scss)

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
 * @param {string|number} props.value - value
 * @return {object} An object of children element
 */

const Masked = ({
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
        field={field}
        mask={mask}
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
        defaultValue={value}
        readOnly={disabled ? readonly : undefined}
        disabled={!disabled ? undefined : disabled}
        autoFocus={autoFocus}
        maxLength={maxLength}
        required
        guide={guide}
        focused={focused}
      />
      <span className={cssClass('highlight')} />
      <span className={cssClass('bar')} />
      {label && (
        <Label id={name} className={scss.input__label}>
          {translate ? label : label}
        </Label>
      )}
    </div>
  )
}

Masked.displayName = 'Masked'

Masked.propTypes = {
  /**
   * Field
   */
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  }).isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  /**
   * Type, default `text`, `number`, `textarea`
   */
  type: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoFocus: PropTypes.bool,
  translate: PropTypes.bool,
  maxLength: PropTypes.number,
  mask: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)])
  ),
  /**
   * if it is true underscores will be displayed to represent mask format, for example ____-____-____-____.
   * If it is false no help will be displayed in input.
   */
  guide: PropTypes.bool,
  /**
   * is focused, focused, keep label by default on top
   */
  focused: PropTypes.string
}

Masked.defaultProps = {
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

export default Masked
