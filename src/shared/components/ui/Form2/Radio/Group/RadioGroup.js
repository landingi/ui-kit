import React from 'react'
import PropTypes from 'prop-types'
import Error from 'shared/components/ui/Form2/Error'
import Label from 'shared/components/ui/Label'
import { FormattedMessage } from 'react-intl'

/**
 * Radio Group  - stateless presentational component
 * @param {object} props - props
 * @param {object} props.errors - element errors list
 * @param {object} props.touched - element touched list
 * @param {string} props.label - label
 * @param {string} props.name - element name
 * @param {object} props.chidlren - children
 * @return {object} An object of children element
 */
const radioGroup = ({ errors, touched, label, name, children }) => (
  <div>
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
radioGroup.displayName = 'Radio Group'

/**
 * The properties.
 * @type {Object}
 */
radioGroup.propTypes = {
  /**
   * The text for the button
   */
  children: PropTypes.node.isRequired,
  /**
   * Form
   */
  touched: PropTypes.instanceOf(Object).isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
radioGroup.defaultProps = {
  label: ''
}

export default radioGroup
