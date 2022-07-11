import React from 'react'
import PropTypes from 'prop-types'
import Error from '@components/Form/Error'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Toggle.module.scss'

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
  form: { errors, touched },
  id,
  label,
  className,
  type
}) => {
  const wrapperStyles = useStyles(
    { [styles['toggle-container']]: true },
    className
  )

  const labelStyles = useStyles({
    [styles.toggle]: true,
    [styles['toggle--checked']]: value
  })

  return (
    <div className={wrapperStyles}>
      <label className={labelStyles}>
        <input
          name={name}
          className={styles.toggle__checkbox}
          checked={value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          id={id}
        />

        <span className={styles.toggle__button} />
      </label>

      {label && (
        <label htmlFor={id} className={styles.toggle__label}>
          {label}

          {touched[name] && <Error error={errors[name]} />}
        </label>
      )}
    </div>
  )
}

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
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

FormikToggle.defaultProps = {
  className: '',
  type: 'checkbox',
  label: ''
}

export default FormikToggle
