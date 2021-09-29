import Error from '@components/ui/Form2/Error'
import Input from '@components/ui/Input'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Input - stateless presentational component
 * @param {object} props - props
 * @param {object} props.field - react-formik field properties
 * @param {object} props.form - react-formik form properties
 * @param {string} props.id - id of the element
 * @param {string} props.label - label
 * @param {string} props.placeholder - placeholder
 * @param {string} props.type - type of element `text, number etc`
 * @param {bool} props.translate - if label should be translated by intl
 * @param {number} props.maxLength - max length of input
 * @param {bool} props.autoFocus - autoFocus
 * @param {string|object} props.tooltip - tooltip
 * @param {bool} props.focused - focused, keep label by default on top
 * @param {bool} props.disabled - disabled
 * @param {bool} props.required - required
 * @return {object} An object of children element
 */
const input = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched },
  id,
  label,
  placeholder,
  type,
  disabled,
  translate,
  maxLength,
  autoFocus,
  required,
  tooltip,
  focused,
  min,
  controlledValue
}) => {
  const errorClass =
    errors[name] && touched[name] ? 'form--has-error' : ''

  return (
    <div className={`form-field ${errorClass}`}>
      <Input
        autoFocus={autoFocus}
        controlledValue={controlledValue}
        disabled={disabled}
        focused={focused}
        id={id}
        label={label}
        maxLength={maxLength}
        min={min}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        translate={translate}
        type={type}
        value={value}
      />

      {touched[name] && <Error error={errors[name]} />}
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
  autoFocus: PropTypes.bool,

  controlledValue: PropTypes.bool,

  disabled: PropTypes.bool,

  /**
   * Field
   */
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }).isRequired,
  /**
   * Form
   */
  form: PropTypes.shape({
    errors: PropTypes.instanceOf(Object),
    touched: PropTypes.instanceOf(Object)
  }).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  maxLength: PropTypes.number,
  min: PropTypes.number,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  tooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object)
  ]),
  translate: PropTypes.bool,
  type: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
input.defaultProps = {
  autoFocus: false,
  controlledValue: false,
  disabled: false,
  label: '',
  maxLength: 524288,
  placeholder: '',
  required: true,
  tooltip: '',
  translate: true,
  type: 'text'
}

export default input
