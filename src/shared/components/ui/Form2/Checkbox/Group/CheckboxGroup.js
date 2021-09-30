/* eslint-disable react/prop-types */
import { FormattedMessage } from 'react-intl'
import Error from '@components/ui/Form2/Error'
import Label from '@components/ui/Label'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Checkbox Group  - stateless presentational component
 * @param {object} props - props
 * @param {object} props.errors - element errors list
 * @param {object} props.touched - element touched list
 * @param {string} props.label - label, default: ''
 * @param {string} props.name - element name
 * @param {string|array} props.className - list of class names, default: input__checkboxgroup
 * @param {object} props.chidren
 * @return {object} An object of children element
 */
const checkboxGroup = ({
  errors,
  touched,
  label,
  name,
  children
}) => (
  <div className="form-field">
    {label && (
      <Label>
        <FormattedMessage id={`${label}`} />
      </Label>
    )}

    {children}

    {touched[name] && <Error error={errors[name]} />}
  </div>
)
/**
 * Display name
 * @type {string}
 */
checkboxGroup.displayName = 'Checkbox Group'

/**
 * The properties.
 * @type {Object}
 */
checkboxGroup.propTypes = {
  /**
   * The text for the button
   */
  children: PropTypes.node.isRequired,

  label: PropTypes.string,

  name: PropTypes.string.isRequired,
  /**
   * Form
   */
  touched: PropTypes.instanceOf(Object).isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
checkboxGroup.defaultProps = {
  label: ''
}

export default checkboxGroup
