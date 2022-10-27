import React from 'react'
import PropTypes from 'prop-types'
import Error from '@components/Form/Error'
import MaskedInput from '@components/Input/MaskedInput'

// TODO Form Input Masked css, mdx, test
/**
 * Masked Input - stateless presentational component
 * @param {object} props - props
 * @param {object} props.field - react-formik field properties
 * @param {object} props.form - react-formik form properties
 * @param {string} props.id - id of the element
 * @param {string} props.label - label
 * @param {string} props.placeholder - placeholder
 * @param {string} props.type - type of element `text, number etc`
 * @param {bool} props.translate - if label should be translated by intl
 * @param {number} props.maxLength - maxLength
 * @param {disabled} props.disabled - disabled
 * @param {array} props.mask - mask applied to input
 * @param {bool} props.guide - if it is true underscores will be displayed to represent mask format
 * @param {string} props.focused - focused, keep label by default on top
 * @param {object} props.i18n - translations
 * @param {bool} props.alwaysShowLabel - when true label is shown even when input is empty
 * @return {object} An object of children element
 */
const Masked = ({
  field,
  form,
  id,
  type,
  disabled,
  translate,
  maxLength,
  mask,
  guide,
  focused,
  i18n,
  alwaysShowLabel
}) => {
  const { name, value, onChange, onBlur } = field
  const { errors, touched } = form
  const errorClass = errors[name] && touched[name] ? 'form--has-error' : ''

  return (
    <div
      className={`form-field ${errorClass}`}
      data-testid='form-masked-input-wrapper'
    >
      <MaskedInput
        field={field}
        mask={mask}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        i18n={i18n}
        disabled={disabled}
        translate={translate}
        maxLength={maxLength}
        guide={guide}
        focused={focused}
        alwaysShowLabel={alwaysShowLabel}
      />
      {touched[name] && <Error error={errors[name]} />}
    </div>
  )
}

Masked.displayName = 'Masked'

Masked.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  }).isRequired,
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
  focused: PropTypes.string,
  i18n: PropTypes.shape({
    placeholder: PropTypes.string,
    label: PropTypes.string
  }),
  alwaysShowLabel: PropTypes.bool
}

Masked.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  maxLength: 524288,
  mask: [],
  disabled: false,
  translate: true,
  guide: false,
  focused: 'false',
  i18n: {
    placeholder: '',
    label: ''
  },
  alwaysShowLabel: false
}

export default Masked
