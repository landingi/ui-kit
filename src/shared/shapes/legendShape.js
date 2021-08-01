import PropTypes from 'prop-types'

const shape = PropTypes.shape({
  range: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    'success',
    'warning',
    'alert',
    'info'
  ]).isRequired
})

export default shape
