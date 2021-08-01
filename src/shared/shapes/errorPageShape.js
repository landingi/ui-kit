import PropTypes from 'prop-types'

const shape = PropTypes.shape({
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
})

export default shape
