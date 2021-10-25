/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import Error from '@components/ui/Form/Error'
import Label from '@components/ui/Label'

/**
 * Checkbox Group  - stateless presentational component
 * @param {object} props - props
 * @param {object} props.errors
 * @param {object} props.touched
 * @param {string} props.label
 * @param {string} props.name
 * @param {string|array} props.className
 * @param {object} props.children
 * @return {object} An object of children element
 */
const CheckboxGroup = ({ errors, touched, label, name, children }) => (
  <div className='form-field'>
    {label && <Label>{label}</Label>}
    {children}
    {touched[name] && <Error error={errors[name]} />}
  </div>
)

CheckboxGroup.displayName = 'CheckboxGroup'

CheckboxGroup.propTypes = {
  children: PropTypes.node.isRequired,
  touched: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired
}

CheckboxGroup.defaultProps = {
  label: ''
}

export default CheckboxGroup
