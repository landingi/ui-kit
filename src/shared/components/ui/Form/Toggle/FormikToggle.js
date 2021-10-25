import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import Error from '@components/ui/Form/Error'
import scss from './Toggle.scss'

const cssClass = styles(scss)

/**
 * Formik toggle - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className
 * @param {string} props.type
 * @param {object} props.field
 * @param {object} props.form
 * @param {string} props.id
 * @param {string} props.label
 * @return {object} An object of children element
 */
const FormikToggle = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched /*setFieldValue [UNUSED_VARIABLE]*/ },
  id,
  label,
  className,
  type
}) => (
  <div className={cssClass('toggle-container', className)}>
    <label className={cssClass('toggle', { 'toggle--checked': value })}>
      <input
        name={name}
        className={cssClass('toggle__checkbox')}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        id={id}
      />
      <span className={cssClass('toggle__button')} />
    </label>
    {label && (
      <label htmlFor={id} className={cssClass('toggle__label')}>
        {label}
        {touched[name] && <Error error={errors[name]} />}
      </label>
    )}
  </div>
)

FormikToggle.displayName = 'FormikToggle'

FormikToggle.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.instanceOf(Object),
    touched: PropTypes.instanceOf(Object),
    setFieldValue: PropTypes.func
  }).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf])
}

FormikToggle.defaultProps = {
  className: '',
  type: 'checkbox',
  label: ''
}

export default FormikToggle
