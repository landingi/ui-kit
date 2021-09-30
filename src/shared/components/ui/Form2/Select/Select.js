import { FormattedMessage } from 'react-intl'
import { styles } from '@helpers/css'
import Error from '@components/ui/Form2/Error'
import Label from '@components/ui/Label'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Select.scss'

const cssClass = styles(scss),
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
  select = ({
    field: { name, value, onChange, onBlur },
    form: { errors, touched },
    id,
    label,
    className,
    children
  }) => {
    const errorClass = errors[name]
        ? 'form--has-error'
        : '',
      filledClass = touched[name]
        ? 'form-field--touched'
        : ''

    return (
      <div
        className={`form-field ${
          errorClass || filledClass
        }`}
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
            <Label className={scss.input__label} id={name}>
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
   * Children elements `option`
   */
  children: PropTypes.node.isRequired,

  /**
   * Classname, default `select`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
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
