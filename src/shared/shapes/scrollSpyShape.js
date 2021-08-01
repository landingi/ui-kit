import PropTypes from 'prop-types'

const childrenShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
})

const shape = PropTypes.shape({
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(childrenShape)
})

export default shape
