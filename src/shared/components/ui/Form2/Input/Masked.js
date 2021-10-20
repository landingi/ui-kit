import React from 'react'
import PropTypes from 'prop-types'
import Error from 'shared/components/ui/Form2/Error'
import MaskedInput from 'shared/components/ui/Input/Masked'

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
  const { name, value, onChange, onBlur } = field
  const { errors, touched } = form
  const errorClass = errors[name] && touched[name] ? 'form--has-error' : ''

  return (
    <div className={`form-field ${errorClass}`}>
      <MaskedInput
        field={field}
        mask={mask}
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
        guide={guide}
        focused={focused}
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
  mask: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)])
  ),
  guide: PropTypes.bool,
  focused: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
maskedInput.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  disabled: false,
  translate: true,
  maxLength: 524288,
  mask: [],
  guide: false,
  focused: 'false'
}

export default maskedInput
