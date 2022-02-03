import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './Checkbox.scss'

const cssClass = styles(scss)

// TODO Checkbox css-modules, mdx and test
/**
 * Checkbox - stateless presentational component
 * @param {object} props - props
 * @param {func} props.onChange - onChange handler
 * @param {func} props.className - custom styles
 * @param {func} props.disabled - disable checkbox
 * @param {func} props.formikKey - formik key
 * @return {object} An object of children element
 */
const Checkbox = ({ onChange, className, checked, disabled, formikKey }) => (
  <label className={cssClass('input__checkbox', className)}>
    <input
      onChange={onChange}
      name={formikKey}
      checked={checked}
      disabled={disabled}
      type='checkbox'
    />
    <div />
  </label>
)

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  formikKey: PropTypes.string
}

Checkbox.defaultProps = {
  className: null,
  disabled: false,
  formikKey: null
}

export default Checkbox
