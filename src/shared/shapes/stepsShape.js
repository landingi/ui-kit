import PropTypes from 'prop-types'

const shape = PropTypes.shape({
  description: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['completed', 'current', 'next'])
    .isRequired
})

export default shape
