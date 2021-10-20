import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import { FormattedMessage } from 'react-intl'
import Error from '@components/ui/Form2/Error'
import scss from './Toggle.scss'

const cssClass = styles(scss)

/**
 * formik toogle - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: ''
 * @param {string} props.type - input type checkbox or radio, default: checkbox
 * @param {object} props.field - Field
 * @param {object} props.form - Form
 * @param {string} props.id - id
 * @param {string} props.label - label, dafult: ''
 * @return {object} An object of children element
 */
const formikToggle = ({
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
        <FormattedMessage id={`${label}`} />
        {touched[name] && <Error error={errors[name]} />}
      </label>
    )}
  </div>
)

/**
 * Display name
 * @type {string}
 */
formikToggle.displayName = 'Formik Toggle'

/**
 * The properties.
 * @type {Object}
 */
formikToggle.propTypes = {
  /**
   * Classname, default ``
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * Type, default `checkbox`
   */
  type: PropTypes.string,
  /**
   * Field
   */
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  }).isRequired,
  /**
   * Form
   */
  form: PropTypes.shape({
    errors: PropTypes.instanceOf(Object),
    touched: PropTypes.instanceOf(Object),
    setFieldValue: PropTypes.func
  }).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf])
}

/**
 * The default properties.
 * @type {Object}
 */
formikToggle.defaultProps = {
  className: '',
  type: 'checkbox',
  label: ''
}

export default formikToggle
