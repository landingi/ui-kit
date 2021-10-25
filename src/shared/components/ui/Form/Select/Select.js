import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import Error from '@components/ui/Form/Error'
import Label from '@components/ui/Label'
import scss from './Select.scss'

const cssClass = styles(scss)

/**
 * Select - stateless presentational component
 * @param {object} props - props
 * @param {object} props.field - react-formik field properties
 * @param {object} props.form - react-formik form properties
 * @param {string} props.id - id of element
 * @param {string} props.label - label
 * @param {string|array} props.className - list of class names, default: `select-form`
 * @param {object} props.children - children
 * @return {object} An object of children element
 */
const Select = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched },
  id,
  label,
  className,
  children
}) => {
  const errorClass = errors[name] ? 'form--has-error' : ''
  const filledClass = touched[name] ? 'form-field--touched' : ''

  return (
    <div className={`form-field ${errorClass || filledClass}`}>
      <div className={scss.input__wrapper}>
        <select
          className={cssClass(className)}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        >
          {children}
        </select>
        <span className={cssClass('highlight')} />
        <span className={cssClass('bar')} />
        {label && (
          <Label id={name} className={scss.input__label}>
            {label}
          </Label>
        )}
      </div>
      <Error error={errors[name]} />
    </div>
  )
}

Select.displayName = 'Select'

Select.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.node.isRequired,
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
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)])
}

Select.defaultProps = {
  className: 'select-form',
  label: ''
}

export default Select
