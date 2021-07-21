/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import Error from 'shared/components/ui/Form2/Error'
import Label from 'shared/components/ui/Label'
import { FormattedMessage } from 'react-intl'

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
  /**
   * Form
   */
  touched: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
checkboxGroup.defaultProps = {
  label: ''
}

export default checkboxGroup
