import PropTypes from 'prop-types'

const shape = PropTypes.shape({
  after_values: PropTypes.shape({
    next: PropTypes.number
  }),
  before_values: PropTypes.shape({
    first: PropTypes.number,
    prev: PropTypes.number
  }),
  values: PropTypes.shape({
    after: PropTypes.arrayOf(PropTypes.number),
    before: PropTypes.arrayOf(PropTypes.number),
    current: PropTypes.arrayOf(PropTypes.number)
  })
}).isRequired

export default shape
