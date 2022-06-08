import React from 'react'
import PropTypes from 'prop-types'
import Error from '@components/Form/Error'
import styles from './Checkbox.module.scss'
import { getDeepValue } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * Checkbox - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: ''
 * @param {object} props.field - react-formik field properties
 * @param {object} props.form - react-formik form properties
 * @param {string} props.id - id of the element
 * @param {string} props.label - label, default: ''
 * @param {string} props.type - type of element, default: 'checkbox'
 * @return {object} An object of children element
 */
const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched /*setFieldValue  [UNUSED_VARIABLE]*/ },
  id,
  label,
  className,
  type
}) => {
  const error = getDeepValue(errors, name)
  const isTouched = getDeepValue(touched, name)

  const containerStyles = useStyles(
    {
      [styles['checkbox-container']]: true
    },
    className
  )

  const inputStyles = useStyles({
    [styles['checkbox__input']]: true
  })

  const labelStyles = useStyles({
    [styles['checkbox__label']]: true
  })

  return (
    <div className={containerStyles}>
      <label className={inputStyles}>
        <input
          name={name}
          checked={value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          id={id}
        />
        <div />
      </label>
      {label && (
        <label htmlFor={id} className={labelStyles}>
          {label}
          {isTouched && <Error error={error} />}
        </label>
      )}
    </div>
  )
}

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
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

Checkbox.defaultProps = {
  className: '',
  label: '',
  type: 'checkbox'
}

export default Checkbox
