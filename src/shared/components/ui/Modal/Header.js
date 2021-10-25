import Heading from '@components/ui/Heading'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Modal Header - stateless presentational component
 * @param {object} props
 * @param {object} props.title
 * @return {object} An object of children element
 */
const ModalHeader = ({ title }) => <Heading level={2}>{title}</Heading>

ModalHeader.displayName = 'ModalHeader'

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default ModalHeader
