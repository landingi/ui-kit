/* eslint-disable react/jsx-no-bind */
import { FormattedMessage, injectIntl } from 'react-intl'
import { styles } from '@helpers/css'
import Error from '@components/ui/Form2/Error'
import Label from '@components/ui/Label'
import PropTypes from 'prop-types'
import React from 'react'
import Select from 'react-select'
import scss from './reactSelect.scss'
import uuid from 'react-uuid'

const cssClass = styles(scss),
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
  reactSelect = ({
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
    const errorClass =
        errors[name] && touched[name]
          ? 'form--has-error'
          : '',
      filledClass = value[name] ? 'form--has-value' : '',
      handleChange = value => onChange(name, value.value),
      handleBlur = () => onBlur(name, true)

    return (
      <div
        className={`form-field form-rselect ${errorClass} ${filledClass}`}
      >
        {label && (
          <Label id={name}>
            <FormattedMessage id={`${label}`} />
          </Label>
        )}

        <div className={scss.input__wrapper}>
          <Select
            className={cssClass(className)}
            classNamePrefix='react-select'
            id={id}
            key={uuid()}
            onBlur={handleBlur}
            onChange={handleChange}
            options={options}
            placeholder={intl.formatMessage({
              id: `${placeholder || label}`
            })}
            value={
              options
                ? options.find(
                    option => option.value === value[name]
                  )
                : value[name]
            }
          />

          {touched[name] && <Error error={errors[name]} />}
        </div>
      </div>
    )
  }

/**
 * Display name
 * @type {string}
 */
reactSelect.displayName = 'React Select'

/**
 * The properties.
 * @type {Object}
 */
reactSelect.propTypes = {
  /**
   * Classname, default `input`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  errors: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  /**
   * Intl from react-intl
   */
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,

  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  name: PropTypes.string.isRequired,

  onBlur: PropTypes.func,

  onChange: PropTypes.func,

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

  placeholder: PropTypes.string,

  touched: PropTypes.instanceOf(Object),

  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
    PropTypes.bool
  ])
}

/**
 * The default properties.
 * @type {Object}
 */
reactSelect.defaultProps = {
  className: 'react-select-container',
  errors: {},
  label: '',
  onBlur: () => null,
  onChange: () => null,
  placeholder: '',
  touched: {},
  value: null
}

export default injectIntl(reactSelect)
