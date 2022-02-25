import React from 'react'
import PropTypes from 'prop-types'
import { getDeepValue } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Radio.module.scss'
import InputComponent from '@components/ui/Input'

// TODO Form Radio mdx
/**
 * Radio - stateless presentational component
 * @param {object} props - props
 * @param {object} props.field - react-formik field properties
 * @param {object} props.form - react-formik form properties
 * @param {string} props.id - id of the element
 * @param {string} props.label - label
 * @param {string|array} props.className - list of class names, default: input__radio
 * @param {string} props.type - type of element `text, number etc`
 * @param {object} props.i18n - object of translation
 * @return {object} An object of children element
 */
const Radio = ({
  field: { name, value, onChange, onBlur },
  form: { errors },
  id,
  label,
  className,
  type,
  i18n
}) => {
  const error = getDeepValue(errors, name)
  const wrapperClasses = useStyles(
    {
      [styles['form-field']]: error,
      [styles['form--has-error']]: error
    },
    className
  )
  const elementClasses = useStyles({
    [styles['input__radio']]: true
  })

  return (
    <div className={wrapperClasses}>
      <label className={elementClasses}>
        {label && <label htmlFor={id}>{i18n?.label}</label>}
        <InputComponent
          name={name}
          id={id}
          type={type}
          value={id}
          i18n={i18n}
          checked={id === value}
          onChange={onChange}
          onBlur={onBlur}
          className={styles['form-field']}
        />
        <div />
      </label>
    </div>
  )
}

Radio.displayName = 'FormRadio'

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
    errors: PropTypes.instanceOf(Object)
  }),
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  i18n: PropTypes.shape({
    label: PropTypes.string,
    placeholder: PropTypes.string
  })
}

Radio.defaultProps = {
  type: 'radio',
  className: '',
  label: '',
  i18n: {
    label: null,
    placeholder: null
  }
}

export default Radio
