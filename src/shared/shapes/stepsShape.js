import PropTypes from 'prop-types'

const shape = PropTypes.shape({
  variant: PropTypes.oneOf(['completed', 'current', 'next']).isRequired,
  description: PropTypes.string.isRequired
})

export default shape
