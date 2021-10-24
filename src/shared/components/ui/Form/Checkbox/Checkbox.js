import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import { FormattedMessage } from 'react-intl'
import Error from '@components/ui/Form/Error'
import scss from './Checkbox.scss'
import { getDeepValue } from '@helpers/data'

const cssClass = styles(scss)

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

  return (
    <div className={cssClass('checkbox-container', className)}>
      <label className={cssClass('checkbox__input')}>
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
        <label htmlFor={id} className={cssClass('checkbox__label')}>
          <FormattedMessage id={`${label}`} />
          {isTouched && <Error error={error} />}
        </label>
      )}
    </div>
  )
}

Checkbox.displayName = 'Form2 / Checkbox'

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
