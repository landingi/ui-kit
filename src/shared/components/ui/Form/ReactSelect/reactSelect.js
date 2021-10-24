/* eslint-disable react/jsx-no-bind */
import React from 'react'
import PropTypes from 'prop-types'
import Error from '@components/ui/Form/Error'
import Select from 'react-select'
import uuid from 'react-uuid'
import Label from '@components/ui/Label'
import { styles } from '@helpers/css'
import scss from './ReactSelect.scss'

const cssClass = styles(scss)

/**
 * React Select - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `input`
 * @param {string} props.name - element name
 * @param {string|number} props.value
 * @param {SyntheticEvent} props.onChange - The react `SyntheticEvent`
 * @param {SyntheticEvent} props.onBlur - The react `SyntheticEvent`
 * @param {object} props.errors - element errors list
 * @param {object} props.touched - element touched list
 * @param {string} props.id - id of the element
 * @param {string} props.label - label
 * @param {string} props.placeholder - placeholder
 * @param {array} props.options - list of options
 * @param {object} props.intl - react intl formatMessage function
 * @return {object} An object of children element
 */
const ReactSelect = ({
  className,
  name,
  value,
  onChange,
  onBlur,
  errors,
  touched,
  id,
  label,
  placeholder,
  options,
  intl
}) => {
  const errorClass = errors[name] && touched[name] ? 'form--has-error' : ''
  const filledClass = value[name] ? 'form--has-value' : ''
  const handleChange = value => onChange(name, value.value)
  const handleBlur = () => onBlur(name, true)

  return (
    <div className={`form-field form-rselect ${errorClass} ${filledClass}`}>
      {label && (
        <Label id={name}>
          {label}
        </Label>
      )}
      <div className={scss.input__wrapper}>
        <Select
          className={cssClass(className)}
          id={id}
          options={options}
          onChange={handleChange}
          onBlur={handleBlur}
          value={
            options
              ? options.find(option => option.value === value[name])
              : value[name]
          }
          key={uuid()}
          placeholder={placeholder || label}
          classNamePrefix='react-select'
        />
        {touched[name] && <Error error={errors[name]} />}
      </div>
    </div>
  )
}

ReactSelect.displayName = 'ReactSelect'

ReactSelect.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
    PropTypes.bool
  ]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.objectOf(PropTypes.string),
  touched: PropTypes.instanceOf(Object),
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
      ])
    })
  ).isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

ReactSelect.defaultProps = {
  className: 'react-select-container',
  label: '',
  placeholder: '',
  errors: {},
  touched: {},
  value: null,
  onChange: () => null,
  onBlur: () => null
}

export default ReactSelect
