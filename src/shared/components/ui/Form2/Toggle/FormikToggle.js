import { FormattedMessage } from 'react-intl'
import { styles } from '@helpers/css'
import InputError from '@components/ui/Form2/Error'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Toggle.scss'

const cssClass = styles(scss),
  /**
   * Formik toogle - stateless presentational component
   * @param {object} props - props
   * @param {string|array} props.className - list of class names, default: ''
   * @param {string} props.type - input type checkbox or radio, default: checkbox
   * @param {object} props.field - Field
   * @param {object} props.form - Form
   * @param {string} props.id - id
   * @param {string} props.label - label, dafult: ''
   * @return {object} An object of children element
   */
  formikToggle = ({
    field: { name, value, onChange, onBlur },
    form: { errors, touched, setFieldValue },
    id,
    label,
    className,
    type
  }) => (
    <div className={cssClass('toggle-container', className)}>
      <label
        className={cssClass('toggle', {
          'toggle--checked': value
        })}
      >
        <input
          checked={value}
          className={cssClass('toggle__checkbox')}
          id={id}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          type={type}
        />

        <span className={cssClass('toggle__button')} />
      </label>

      {label && (
        <label className={cssClass('toggle__label')} htmlFor={id}>
          <FormattedMessage id={`${label}`} />

          {touched[name] && <InputError error={errors[name]} />}
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
   * Field
   */
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.bool
  }).isRequired,

  /**
   * Form
   */
  form: PropTypes.shape({
    errors: PropTypes.instanceOf(Object),
    setFieldValue: PropTypes.func,
    touched: PropTypes.instanceOf(Object)
  }).isRequired,

  id: PropTypes.string.isRequired,

  label: PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf]),
  /**
   * Type, default `checkbox`
   */
  type: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
formikToggle.defaultProps = {
  className: '',
  label: '',
  type: 'checkbox'
}

export default formikToggle
