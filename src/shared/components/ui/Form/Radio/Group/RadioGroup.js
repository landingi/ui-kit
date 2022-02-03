import React from 'react'
import PropTypes from 'prop-types'
import Error from '@components/ui/Form/Error'
import Label from '@components/ui/Label'

// TODO Form Radio Group css, mdx
/**
 * Radio Group  - stateless presentational component
 * @param {object} props - props
 * @param {object} props.errors - element errors list
 * @param {object} props.touched - element touched list
 * @param {string} props.label - label
 * @param {string} props.name - element name
 * @param {object} props.children - children
 * @return {object} An object of children element
 */
const RadioGroup = ({ errors, touched, label, name, children }) => (
  <div>
    {label && <Label>{label}</Label>}
    {children}
    {touched[name] && <Error error={errors[name]} />}
  </div>
)

RadioGroup.displayName = 'RadioGroup'

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  touched: PropTypes.instanceOf(Object).isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired
}

RadioGroup.defaultProps = {
  label: ''
}

export default RadioGroup
