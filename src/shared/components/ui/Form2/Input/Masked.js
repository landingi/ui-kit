import Error from '@components/ui/Form2/Error'
import MaskedInput from '@components/ui/Input/Masked'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Masked Input - stateless presentational component
 * @param {object} props - props
 * @param {object} props.field - react-formik field properties
 * @param {object} props.form - react-formik form properties
 * @param {string} props.id - id of the element
 * @param {string} props.label - label
 * @param {string} props.placeholder - placeholder
 * @param {string} props.type - type of element `text, number etc`
 * @param {bool} props.translate - if label should be tranlated by intl
 * @param {number} props.maxLength - maxLength
 * @param {disabled} props.disabled - disabled
 * @param {array} props.mask - mask applied to input
 * @param {bool} props.guide - if it is true underscores will be displayed to represent mask format
 * @param {string} props.focused - focused, keep label by default on top
 * @return {object} An object of children element
 */
const maskedInput = ({
  field,
  form,
  id,
  label,
  placeholder,
  type,
  disabled,
  translate,
  maxLength,
  mask,
  guide,
  focused
}) => {
  const { name, value, onChange, onBlur } = field,
    { errors, touched } = form,
    errorClass =
      errors[name] && touched[name] ? 'form--has-error' : ''

  return (
    <div className={`form-field ${errorClass}`}>
      <MaskedInput
        disabled={disabled}
        field={field}
        focused={focused}
        guide={guide}
        id={id}
        label={label}
        mask={mask}
        maxLength={maxLength}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
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
maskedInput.displayName = 'Input masked'

/**
 * The properties.
 * @type {Object}
 */
maskedInput.propTypes = {
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

  focused: PropTypes.string,
  /**
   * Form
   */
  form: PropTypes.shape({
    errors: PropTypes.instanceOf(Object),
    touched: PropTypes.instanceOf(Object)
  }).isRequired,
  guide: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  mask: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(RegExp)
    ])
  ),
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  translate: PropTypes.bool,
  type: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
maskedInput.defaultProps = {
  disabled: false,
  focused: 'false',
  guide: false,
  label: '',
  mask: [],
  maxLength: 524288,
  placeholder: '',
  translate: true,
  type: 'text'
}

export default maskedInput
