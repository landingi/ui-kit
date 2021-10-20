import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import Error from '@components/ui/Form2/Error'
import { FormattedMessage } from 'react-intl'
import scss from './Radio.scss'
import { getDeepValue } from '@helpers/data'

const cssClass = styles(scss)

/**
 * Radio - stateless presentational component
 * @param {object} props - props
 * @param {object} props.field - react-formik field properties
 * @param {object} props.form - react-formik form properties
 * @param {string} props.id - id of the element
 * @param {string} props.label - label
 * @param {string|array} props.className - list of class names, default: input__radio
 * @param {string} props.type - type of element `text, number etc`
 * @return {object} An object of children element
 */
const Radio = ({
  field: { name, value, onChange, onBlur },
  form: { errors /*touched [UNUSED_VARIABLE]*/ },
  id,
  label,
  className,
  type
}) => {
  const error = getDeepValue(errors, name)
  const errorClass = error ? 'form--has-error' : ''

  return (
    <div className={`form-field ${errorClass}`}>
      <label className={cssClass(className)}>
        {label && (
          <label htmlFor={id}>
            <FormattedMessage id={`${label}`} />
          </label>
        )}
        <input
          name={name}
          id={id}
          type={type}
          value={id}
          checked={id === value}
          onChange={onChange}
          onBlur={onBlur}
          className={cssClass(className)}
        />
        <div />
        <Error error={error} />
      </label>
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
Radio.displayName = 'radio'

/**
 * The properties.
 * @type {Object}
 */
Radio.propTypes = {
  /**
   * Classname, default `input__radio`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * Type, default `radio`
   */
  type: PropTypes.string,
  /**
   * Field
   */
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  }).isRequired,
  /**
   * Form
   */
  form: PropTypes.shape({
    errors: PropTypes.instanceOf(Object),
    touched: PropTypes.instanceOf(Object)
  }),
  id: PropTypes.string.isRequired,
  label: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
Radio.defaultProps = {
  className: 'input__radio',
  type: 'radio',
  label: ''
}

export default Radio
