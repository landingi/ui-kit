import Heading from '@components/ui/Heading'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Modal Header - stateless presentational component
 * @param {object} props - props
 * @param {object} props.title - title
 * @return {object} An object of children element
 */

const modalHeader = ({ title }) => <Heading level={2}>{title}</Heading>

/**
 * Display name
 * @type {string}
 */
modalHeader.displayName = 'Modal.Header'

/**
 * The properties.
 * @type {Object}
 */
modalHeader.propTypes = {
  /**
   * Title elements
   */
  title: PropTypes.string.isRequired
}

export default modalHeader
