import PropTypes from 'prop-types'

const childrenShape = PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
  shape = PropTypes.shape({
    children: PropTypes.arrayOf(childrenShape),
    icon: PropTypes.string,
    title: PropTypes.string.isRequired
  })

export default shape
