import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import Error from 'shared/components/ui/Form2/Error'
import Label from 'shared/components/ui/Label'
import scss from './Select.scss'
import { FormattedMessage } from 'react-intl'

const cssClass = styles(scss)

/**
 * Select - stateless presentational component
 * @param {object} props - props
 * @param {object} props.field - react-formik field properties
 * @param {object} props.form - react-formik form properties
 * @param {string} props.id - id of element
 * @param {string} props.label - label
 * @param {string|array} props.className - list of class names, default: `select-form`
 * @param {object} props.chidren - children
 * @return {object} An object of children element
 */
const select = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched },
  id,
  label,
  className,
  children
}) => {
  const errorClass = errors[name] ? 'form--has-error' : ''
  const filledClass = touched[name]
    ? 'form-field--touched'
    : ''

  return (
    <div
      className={`form-field ${errorClass || filledClass}`}
    >
      <div className={scss.input__wrapper}>
        <select
          className={cssClass(className)}
          id={id}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
        >
          {children}
        </select>

        <span className={cssClass('highlight')} />

        <span className={cssClass('bar')} />

        {label && (
          <Label className={scss.input__label}
id={name}>
            <FormattedMessage id={`${label}`} />
          </Label>
        )}
      </div>

      <Error error={errors[name]} />
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
select.displayName = 'Select'

/**
 * The properties.
 * @type {Object}
 */
select.propTypes = {
  /**
   * Classname, default `select`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Children elements `option`
   */
  children: PropTypes.node.isRequired,
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
   * Form
   */
  form: PropTypes.shape({
    errors: PropTypes.instanceOf(Object),
    touched: PropTypes.instanceOf(Object)
  }).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
select.defaultProps = {
  className: 'select-form',
  label: ''
}

export default select
