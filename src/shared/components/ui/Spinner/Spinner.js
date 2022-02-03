import Icon from '@components/ui/Icon'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Spinner - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @return {object} An object of children element
 */
const Spinner = ({ className }) => {
  return (
    <div className={className}>
      <Icon icon='icon-spinner' spin />
    </div>
  )
}

Spinner.displayName = 'Spinner'

Spinner.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

Spinner.defaultProps = {
  className: ''
}

export default Spinner
