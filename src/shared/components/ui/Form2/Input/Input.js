import React from 'react'
import PropTypes from 'prop-types'
import Error from 'shared/components/ui/Form2/Error'
import Input from 'shared/components/ui/Input'

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
  const errorClass = errors[name] && touched[name] ? 'form--has-error' : ''

  return (
    <div className={`form-field ${errorClass}`}>
      <Input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        label={label}
        placeholder={placeholder}
        disabled={disabled}
        translate={translate}
        maxLength={maxLength}
        autoFocus={autoFocus}
        required={required}
        tooltip={tooltip}
        focused={focused}
        min={min}
        controlledValue={controlledValue}
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
  /**
   * Field
   */
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  }).isRequired,
  /**
   * Form
   */
  form: PropTypes.shape({
    errors: PropTypes.instanceOf(Object),
    touched: PropTypes.instanceOf(Object)
  }).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  translate: PropTypes.bool,
  maxLength: PropTypes.number,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  tooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object)
  ]),
  min: PropTypes.number,
  controlledValue: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
input.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  disabled: false,
  translate: true,
  maxLength: 524288,
  autoFocus: false,
  required: true,
  tooltip: '',
  controlledValue: false
}

export default input
