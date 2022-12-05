import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React, { FC } from 'react'

import styles from './Radio.module.scss'

interface RadioProps {
  field: {
    name: string
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onBlur: React.FocusEventHandler<HTMLInputElement>
  }
  id: string
  label?: string
  className?: string | string[]
  type?: string
  disabled?: boolean
}

/**
 * Radio - stateless presentational component
 * @param {object} props - props
 * @param {object} props.field - react-formik field properties
 * @param {object} props.form - react-formik form properties
 * @param {string} props.id - id of the element
 * @param {string} props.label - label
 * @param {string|array} props.className - list of class names, default: radio
 * @param {string} props.type - type of element `text, number etc`
 * @param {bool} props.disabled - radio button is disabled
 * @return {object} An object of children element
 */
const Radio: FC<RadioProps> = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className = '',
  type = 'radio',
  disabled
}) => {
  const radioStyles = useStyles(
    {
      [styles.radio]: true
    },
    className
  )

  return (
    <label className={radioStyles}>
      {label && <label htmlFor={id}>{label}</label>}

      <input
        name={name}
        id={id}
        type={type}
        value={id}
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={radioStyles}
        disabled={disabled}
      />

      <div className={styles.radio__overlay} />
    </label>
  )
}

Radio.displayName = 'Radio'

Radio.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.instanceOf(Object),
    touched: PropTypes.instanceOf(Object)
  }),
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool
}

Radio.defaultProps = {
  className: '',
  type: 'radio',
  label: '',
  disabled: false
}

export default Radio
