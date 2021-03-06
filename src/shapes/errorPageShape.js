import PropTypes from 'prop-types'

const shape = PropTypes.shape({
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
})

export default shape
