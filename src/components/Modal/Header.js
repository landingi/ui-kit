import Heading from '@components/Heading'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Modal Header - stateless presentational component
 * @param {object} props
 * @param {object} props.title
 * @param {string} props.align - alignment
 * @return {object} An object of children element
 */
const ModalHeader = ({ title, align }) => (
    <Heading level={2} align={align}>
      {title}
    </Heading>
  )

ModalHeader.displayName = 'ModalHeader'

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'center', 'right'])
}

ModalHeader.defaultProps = {
  align: 'left'
}

export default ModalHeader
